const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const axios = require('axios');
const bcrypt = require('bcrypt');
class dbService {
  async createUser(data) {

	const existingUser = await prisma.user.findUnique({
		where: {
		  email: data.email,
		},
	  });
	if(existingUser) {
		return { status: 'error', message: 'User with this email already exists' };
	} 
	try{
		const hashedPassword = await bcrypt.hash(data.password, 10);
		const newUser = await prisma.user.create({
		data: {
			email: data.email,
			password: hashedPassword,
			username: data.username,
			plants: {}
		},
		});
		return { status: 'success', message: 'User created successfully', user: newUser };
	}catch (error) {
		return { status: 'error', message: 'Failed to create user', error: error.message };
	}
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
	const delay = 5000;
    const api2Key = require('./API2_token'); 
		let count = 1000;
		//const api2Url = `https://perenual.com/api/species-list?key=${api2Key.token1}&page=${page}`;
		//const response2 = await axios.get(api2Url);
		//const plants2 = response2.data;
		const plants = await prisma.plant.findMany();
      for (let i = 6000; i < 11000; i++) {
		count++;
		if(count === 1100)
			{
				api2Key.token1 = api2Key.token2;
			}	
		if(count === 1200)
			{
				api2Key.token1 = api2Key.token3;
			}
		if(count === 1300)
			{
				api2Key.token1 = api2Key.token4;
			}	
		if(count === 1400)
			{
				api2Key.token1 = api2Key.token5;
			}
		if(count === 1500)
			{
				api2Key.token1 = api2Key.token6;
			}	
		if(count === 1600)
			{
				api2Key.token1 = api2Key.token7;
			}
		if(count === 1700)
			{
				api2Key.token1 = api2Key.token8;
			}	
		if(count === 1800)
			{
				api2Key.token1 = api2Key.token9;
			}
		if(count === 1900)
		{
			api2Key.token1 = api2Key.token10;
		}
		if(count === 2000)
			{
				api2Key.token1 = api2Key.token11;
			}
		if(count === 2100)
		{
			api2Key.token1 = api2Key.token12;
		}	
		if(count === 2200)
			{
				api2Key.token1 = api2Key.token13;
			}
		if(count === 2300)
			{
				api2Key.token1 = api2Key.token14;
			}	
		if(count === 2400)
			{
				api2Key.token1 = api2Key.token15;
			}
		if(count === 2500)
			{
				api2Key.token1 = api2Key.token16;
			}	
		if(count === 2600)
			{
				api2Key.token1 = api2Key.token17;
			}
		if(count === 2700)
			{
				api2Key.token1 = api2Key.token18;
			}	
		if(count === 2800)
			{
				api2Key.token1 = api2Key.token19;
			}
		if(count === 2900)
		{
			api2Key.token1 = api2Key.token20;
		}
		if(count === 3000)
		{
			api2Key.token1 = api2Key.token21;
		}
		if(count === 3100)
			{
				api2Key.token1 = api2Key.token22;
			}	
		if(count === 3200)
			{
				api2Key.token1 = api2Key.token23;
			}
		if(count === 3300)
			{
				api2Key.token1 = api2Key.token24;
			}	
		if(count === 3400)
			{
				api2Key.token1 = api2Key.token25;
			}
		if(count === 3500)
			{
				api2Key.token1 = api2Key.token26;
			}	
		if(count === 3600)
			{
				api2Key.token1 = api2Key.token27;
			}
		if(count === 3700)
			{
				api2Key.token1 = api2Key.token28;
			}	
		if(count === 3800)
			{
				api2Key.token1 = api2Key.token29;
			}
		if(count === 3900)
		{
			api2Key.token1 = api2Key.token30;
		}
		if(count === 4000)
		{
			api2Key.token1 = api2Key.token31;
		}
		if(count === 4100)
			{
				api2Key.token1 = api2Key.token32;
			}	
		if(count === 4200)
			{
				api2Key.token1 = api2Key.token33;
			}
		if(count === 4300)
			{
				api2Key.token1 = api2Key.token34;
			}	
		if(count === 4400)
			{
				api2Key.token1 = api2Key.token35;
			}
		if(count === 4500)
			{
				api2Key.token1 = api2Key.token36;
			}	
		if(count === 4600)
			{
				api2Key.token1 = api2Key.token37;
			}
		if(count === 4700)
			{
				api2Key.token1 = api2Key.token38;
			}	
		if(count === 4800)
			{
				api2Key.token1 = api2Key.token39;
			}
		if(count === 4900)
		{
			api2Key.token1 = api2Key.token40;
		}
		if(count === 5000)
		{
			api2Key.token1 = api2Key.token41;
		}
		if(count === 5100)
			{
				api2Key.token1 = api2Key.token42;
			}	
		if(count === 5200)
			{
				api2Key.token1 = api2Key.token43;
			}
		if(count === 5300)
			{
				api2Key.token1 = api2Key.token44;
			}	
		if(count === 5400)
			{
				api2Key.token1 = api2Key.token45;
			}
		if(count === 5500)
			{
				api2Key.token1 = api2Key.token46;
			}	
		if(count === 5600)
			{
				api2Key.token1 = api2Key.token47;
			}
		if(count === 5700)
			{
				api2Key.token1 = api2Key.token48;
			}	
		if(count === 5800)
			{
				api2Key.token1 = api2Key.token49;
			}
		if(count === 5900)
		{
			api2Key.token1 = api2Key.token50;
		}
		console.log("da");
		console.log(api2Key.token1);
		const additional_info_data = await axios.get(`https://perenual.com/api/species/details/${i}?key=${api2Key.token1}`);
		const additional_info = additional_info_data.data;
		let additional_info_ = additional_info;
		console.log("da2");
        for(let j = 0; j < plants.length; j++){
			//console.log(plants[j]?.scientific_name);
			//console.log(additional_info.scientific_name[0]);
			let additional_info_1 = additional_info_.scientific_name[0].split('\'');
			let additional_info_2 = additional_info_1[0].trimEnd()
          if(additional_info_2 === plants[j]?.scientific_name){
			console.log(plants[j]?.scientific_name);
			console.log(additional_info_2);
            await prisma.plant.update({
              where: {
				id: plants[j]?.id,
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
				pruning_month : [],
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
  async Login(email, password) {
	const user = await prisma.user.findUnique({
	  where: {
		email: email,
	  },
	});
	if (!user) {
		return { status: 'error', message: 'Invalid email or password' };
	}
	try{
		const result = await bcrypt.compare(password, user.password);	
		if (result) {
			return { status: 'success', message: 'User logged in successfully', user: user };
		} else {
			return { status: 'error', message: 'Invalid email or password' };
		}
	}catch (error) {
		return { status: 'error', message: 'Failed to login', error: error.message };
	}
	

}
  async deleteUserById(userId) {
	return await prisma.user.delete({
	  where: {
		id: userId,
	  },
	});
  }
  
}



module.exports = dbService;