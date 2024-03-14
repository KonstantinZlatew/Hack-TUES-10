import React from "react";
import { useState, useEffect } from "react";

const [plants, setPlants] = useState(null);

useEffect(() => {
    fetch('http://localhost:5173/')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setPlants(data);
        });
}, []);
function PlantList () {
    return();
}

export default PlantList;