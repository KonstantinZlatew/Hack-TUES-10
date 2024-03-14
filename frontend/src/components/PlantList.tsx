import React, { useState, useEffect } from "react";

function PlantList() {
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

    return <div>aaaaaa</div>;
}
    
export default PlantList;