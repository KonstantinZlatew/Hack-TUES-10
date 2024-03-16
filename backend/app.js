const express = require("express");
const app = express();
require("dotenv/config");
const cors = require("cors");
const dbService = require("./db_service");
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

//create a new user
app.post("/user", async (req, res) => {
    try {
        const data = req.body;
        const db = new dbService();
        const userCreationResult = await db.createUser(data);
        
        if (userCreationResult.status === 'success') {
            res.status(200).json({data : userCreationResult})// Send success response
        } else {
            res.status(400).json({ error: userCreationResult.message }); // Send error response
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
//get user by id
app.get("/users/:id", async (req, res) => {
    try{
        const { id } = req.params.id;
        const db = new dbService();
        const user = await db.findUserById(id);

        user.then(data => res.json({ data: data }));
    } catch (error) {  
        res.status(500).json({ error: error.message });
    }  
});

app.get("/notifications/:userId", async (req, res) =>{
    try {
        const { userId } = req.params;
        const user = await db.findUserById(userId);
        const plants = user.plants;

        // Iterate through each plant and schedule reminders
        for (let plant of plants) {
            const char_days = plant.watering_general_benchmark_value;
            char_days = char_days.split('\-');
            const days = parseInt(char_days, 10);

            let time;

            if (days == 1) {time = '0 0 * * *';}
            if (days > 1 && days < 7) {time = `0 0 */${days} * *`;}
            if (days == 7) {time = '0 0 * * 0';}

            time = '*/2 * * * * *';

            schedule.scheduleJob(time, () => {
                res.send(`Water your ${plant.scientific_name}`);
            });
        }
        res.json({ data: user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//add plant to user
app.put("/users/:userId/plants/:plantId", async (req, res) => {
    try {
        const { userId, plantId } = req.params;
        const db = new dbService();
        const user = await db.addPlantToUser(userId, plantId);

        res.json({ data : user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//get plants by user id
app.get("/user/:userId/plants", async (req, res) => {
    try {
        const { userId } = req.params;
        const db = new dbService();
        const user = await db.getPlantsByUserId(userId);

        user.then(data => res.json({ data: data }));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
//adds plants to our db plants model
app.post( "/plants", async (req, res) => {
    try {
        const db = new dbService();
        result = await db.addPlantsToDb();
        //console.log(result);

        //plants.then(data => res.json({ data: data }));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//delete all plants from db
app.delete("/delete_plants", async (req, res) => {
    try {
        const db = new dbService();
        result = await db.deleteAllPlants();
        //console.log(result);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}); 
//get 30 random plants from db
app.get("/get_random_plants", async (req, res) => {
    try {
        const db = new dbService();
        plants = await db.getPlants();
        // console.log(plants);

        res.json({ plants });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/plants/:userId", async (req, res) => {
    try {
        const { userId } = req.params;
        const db = new dbService();
        plants = await db.getPlantsByUserId(userId);
        //console.log(result);

        res.json({ plants });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/plants', async (req, res) => {
    try {
      const searchQuery = req.query.q; // Get the search query from request query params
  
      if (!searchQuery) {
        return res.status(400).json({ error: 'Search query is required.' });
      }
  
      // Search for plants whose names or descriptions contain the search query
      const searchResults = await prisma.plant.findMany({
        where: {
          OR: [
            { name: { contains: searchQuery, mode: 'insensitive' } },
          ]
        }
      });
  
      res.json(searchResults);
    } catch (error) {
      console.error('Error while searching for plants:', error);
      res.status(500).json({ error: 'An error occurred while searching for plants.' });
    }
  });

app.put("/additional_plant_info", async (req, res) => {
    try {
        const db = new dbService();
        result = await db.aditionalPlantInfo();
        //console.log(result);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/get_plant_by_id/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const db = new dbService();
        plant = await db.getPlantById(id);
        //console.log(result);

        res.json({ plant });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/Login/:email/:password", async (req, res) => {
    try {
        const {email, password} = req.params;
        const db = new dbService(); 
        console.log(email);
        user= await db.Login(email, password);
        //console.log(result);
        console.log(password);
        if(user.status === 'success'){
        res.status(200).json({ data : user });
        } else {
            res.status(400).json({ error: user.message });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const db = new dbService();
        db.deleteUserById(id);
        //console.log(result);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
process.on('SIGINT', () => {
    // Perform cleanup tasks (e.g., close database connections, release resources)
    console.log('Received SIGINT signal. Shutting down gracefully...');
    process.exit(0);
});