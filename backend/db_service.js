const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const axios = require('axios');

console.log(process.env["DATABASE_URL"])
class dbService {
  async createUser(data) {
    return await prisma.user.create({
      data: {
        email: data.email,
        password: data.password,
        username: data.username,
        plants: {}
      },
    });
  }

  async addPlantToUser(userId, plantData) {
    return await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        owned_plants: {
          connect: { id: plantData.id},
        }
      },
      include: {
        owned_plants: true
      }
    });
  } 

  async findUserById(id) {
    return await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }
  async getPlantsByUserId(userId) {
    try {
      return await prisma.user.findUnique({
        where: {
          id: userId,
        },
        select : {
          owned_plants: true
        } 
      });
    } catch (error) {
        throw error;
    }
  }
  async addPlantsToDb() {
    const apiKey = require('./API_token');
    // page_size=25
    const delay = 15000;
    try {
        for(let page = 1; page < 150; page++){
          for (let i = 0; i < 20; i++) {
            const apiUrl = `https://trefle.io/api/v1/species?&token=${apiKey}&page=${page}`;

            const response = await axios.get(apiUrl);
            const plants = response.data.data; // Extract plant data from the response
            console.log(plants[i]?.common_name);
              await prisma.plant.create({
                  data: {
                      name: plants[i]?.common_name,
                      scientific_name: plants[i]?.scientific_name,
                      image_url: plants[i]?.image_url,
                      family: plants[i]?.family,
                      genus: plants[i]?.genus,
                      year: plants[i]?.year,
                      bibliography: plants[i]?.bibliography,
                  }
              });
          }
            console.log(`Waiting for ${delay / 1000} seconds before adding more plants...`);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    } catch (err) {
      if (err.response && err.response.status === 429) {
        // Retry after exponential backoff
        const retryAfter = parseInt(err.response.headers['retry-after'], 10) || 60;
        console.log(`Rate limit exceeded. Waiting for ${retryAfter} seconds before retrying...`);
        await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
        await addPlantsToDb(); // Retry the function
      } else {
          throw err; // Re-throw other errors
      }
      }
  }
  async aditionalPlantInfo(){
	const delay = 15000;
    const api2Key = require('./API2_token'); 
		let count = 0;
		//const api2Url = `https://perenual.com/api/species-list?key=${api2Key.token1}&page=${page}`;
		//const response2 = await axios.get(api2Url);
		//const plants2 = response2.data;
		const plants = await prisma.plant.findMany();
      for (let i = 1; i < plants.length; i++) {
		count++;
		if(count === 100)
			{
				api2Key.token1 = api2Key.token2;
			}	
			if(count === 200)
			{
				api2Key.token1 = api2Key.token3;
			}
		console.log("da");
		console.log(api2Key.token1);
		const additional_info_data = await axios.get(`https://perenual.com/api/species/details/${i}?key=${api2Key.token1}`);
		const additional_info = additional_info_data.data;
		console.log("da2");
        for(let j = 0; j < plants.length; j++){
			console.log(plants[j]?.scientific_name);
			console.log(additional_info.scientific_name[0]);
          if(additional_info?.scientific_name[0] === plants[j]?.scientific_name){
			console.log(plants[j]?.scientific_name);
			console.log(additional_info.scientific_name[0]);
			console.log(additional_info?.poisonous_to_humans);
            await prisma.plant.update({
              where: {
				id: String(j+1)
              },
              data: {
                cycle: additional_info?.cycle,
                watering: additional_info?.watering,
                sunlight: additional_info?.sunlight[0],
				volume_water_requirement_unit : additional_info?.volume_water_requirement.unit,
				volume_water_requirement_value: additional_info?.volume_water_requirement.value,
				watering_time : additional_info?.watering_period,
				watering_general_benchmark_value : additional_info?.watering_general_benchmark.value,
				watering_general_benchmark_unit : additional_info?.watering_general_benchmark.unit,
				pruning_month : additional_info?.pruning_month,
				flowers : additional_info?.flowers,
				flowering_season : additional_info?.flowering_season,
				color: additional_info?.color,
				fruits : additional_info?.fruits,
				edible_fruit : additional_info?.edible_fruit,
				fruit_color : additional_info?.fruit_color,
				harvest_season : additional_info?.harvest_season,
				harvest_method : additional_info?.harvest_method,
				leaf_color : additional_info?.leaf_color,
				growth_rate : additional_info?.growth_rate,
				maintenance : additional_info?.maintenance,
				medicinal : additional_info?.medicinal,
				poisonous_to_humans : additional_info?.poisonous_to_humans === 0 ? false : true,
				invasive : additional_info?.invasive,
				indoor : additional_info?.indoor,
				description : additional_info?.description,
              }
            });
          }
      }
      //console.log(`Waiting for ${delay / 1000} seconds before adding more plants...`);
      //await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  async getPlants() {
    const totalCount = await prisma.plant.count();
    console.log(totalCount)
    const randomSkip = Math.max(0, Math.floor(Math.random() * (totalCount - 30)));
    const plants = await prisma.plant.findMany({
      take: 30, 
      skip: randomSkip,
  });
  console.log(plants);
  return plants;
  }

  async getPlantById(plantId) {
	return await prisma.plant.findUnique({
	  where: {
		id: plantId,
	  },
	});
  }

  async deleteAllPlants(){
    return await prisma.plant.deleteMany();
  }
  
  
}



module.exports = dbService;