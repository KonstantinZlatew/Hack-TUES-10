import { useState, useEffect } from "react";

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