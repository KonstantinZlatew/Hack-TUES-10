const express = require("express");
const app = express();
const dbService = require("./db_service");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
app.use(cors());
app.use(express.json());

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
        console.log(result);

        //plants.then(data => res.json({ data: data }));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});