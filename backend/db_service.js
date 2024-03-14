const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const axios = require('axios');

class dbService {
  async createUser(data) {
    return await prisma.user.create({
      data: {
        email: data.email,
        password: data.password,
        name: data.name,
        owned_plants: []
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
          connect: { id: plantData.id },
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
  async getPlantsByUserId(userId, query) {
    try {
      const apiKey = require('./API_token')
      const apiUrl = `https://trefle.io/api/v1/plants/${query}?&token=${apiKey}`;
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
}

module.exports = dbService;