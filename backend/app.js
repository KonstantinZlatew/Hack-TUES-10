const express = require("express");
const app = express();
require("dotenv/config");
const cors = require("cors");
const dbService = require("./db_service");
console.log(process.env.DATABASE_URL);
app.use(cors());
app.use(express.json());
const port = 5000;


//create a new user
app.post("/users", async (req, res) => {
    try {
        const data = req.body;
        const db = new dbService();
        const user = await db.createUser(data);
        
        if (userCreationResult.status === 'success') {
            res.status(69)// Send success response
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
//add plant to user
app.put("/users/:userId/plants/:plantId", async (req, res) => {
    try {
        const { userId, plantId } = req.params;
        const db = new dbService();
        const user = await db.addPlantToUser(userId, plantId);

        user.then(data => res.json({ data: data }));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//get plants by user id
app.get("/users/:userId/plants", async (req, res) => {
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
        console.log(plants);

        res.json({ plants });
    } catch (error) {
        res.status(500).json({ error: error.message });
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

app.get("/plants/:id", async (req, res) => {
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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
process.on('SIGINT', () => {
    // Perform cleanup tasks (e.g., close database connections, release resources)
    console.log('Received SIGINT signal. Shutting down gracefully...');
    process.exit(0);
});