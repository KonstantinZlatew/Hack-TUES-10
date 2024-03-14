import { useState, useEffect } from "react";
import Card from "./Card";

type Plant = {
    name: string;
    image_url: string;
    id: number;
}

function PlantList() {
    const [plants, setPlants] = useState<Plant[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/get_random_plants')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setPlants(data);
            });
    }, []);
    console.log(plants);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plants.map(plant => (
                <Card key={plant.id} title={plant.name} imageUrl={plant.image_url} />
            ))}
        </div>
    );
}
    
export default PlantList;