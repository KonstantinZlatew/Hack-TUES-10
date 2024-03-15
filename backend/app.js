const express = require("express");
const app = express();
const dbService = require("./db_service");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
app.use(cors());
app.use(express.json());
const port = 5000;


//create a new user
app.post("/user", async (req, res) => {
    try {
        const data = req.body;
        const db = new dbService();
        const user = await db.createUser(data);
        
        user
        .then(data => res.json({ data : data }));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
//get user by id
app.get("/user/:id", async (req, res) => {
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
app.put("/user/:userId, plant/:plantId", async (req, res) => {
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
        //console.log(result);

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

app.get("/get_plant_by_id/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const db = new dbService();
        plant = await db.getPlantInfo(id);
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