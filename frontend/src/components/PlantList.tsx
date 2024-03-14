import { useState, useEffect } from "react";
import Card from "./Card";
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

    return <p>aaaaaa</p>;
}
    
export default PlantList;