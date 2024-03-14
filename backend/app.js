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