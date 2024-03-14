const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const axios = require('axios');

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
    const batchSize = 20;
    const delay = 15000;
    try {
        for(let page = 1; page < 100; page++){
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
                      description: plants[i]?.description,
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

  async getPlants() {
    const totalCount = await prisma.plant.count();
    const randomSkip = Math.floor(Math.random() * (totalCount - 30));
    const plants = await prisma.plant.findMany({
      take: 30, 
      skip: randomSkip,
  });
  console.log(plants);
  return plants;
  }

  async deleteAllPlants(){
    return await prisma.plant.deleteMany();
  }
  
  
}



module.exports = dbService;