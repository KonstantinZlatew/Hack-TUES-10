const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class dbService {
  async createUser(data) {
    return await prisma.user.create({
      data: {
        email: data.email,
        password: data.password,
        name: data.name,
      },
    });
  }

  async findUserByEmail(email) {
    return await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }
  async findUserById(id) {
    return await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }
}

module.exports = dbService;