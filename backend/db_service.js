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
    const apiKey = require('./API_token')
    const apiUrl = `https://trefle.io/api/v1/plants?page_size=10&token=${apiKey}`;
    try {
      const response = await axios.get(apiUrl);
      const plants = response.data.data; // Extract plant data from the response
      for (let i = 0; i < 5; i++) {
        console.log(prisma, prisma.plant);
        await prisma.plant.create({
          data: {
            //id: plants[i].id.toString(),
            name: plants[i].common_name, // Use the common_name property as the name
            scientific_name: plants[i].scientific_name,
            image_url: plants[i].image_url,
            family: plants[i].family,
            genus: plants[i].genus,
            year: plants[i].year,
            bibliography: plants[i].bibliography,
            description: plants[i].description,
          }
        });
      }
    }
    catch(err){
      throw err;
    }
  }
  
  
}



module.exports = dbService;