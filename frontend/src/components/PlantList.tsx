import { useState, useEffect } from "react";
import Card from "./Card";

type Plant = {
    name: string;
    image_url: string;
    scientific_name:string;
    id: number;
}

const backendURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000/get_random_plants';

function PlantList() {
    const [plants, setPlants] = useState<Plant[]>([]);

    useEffect(() => {
        fetch(backendURL)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch random plants');
                }
                return res.json();
            })
            .then(data => {
                setPlants(data.plants);
            })
            .catch(error => {
                console.error('Error fetching random plants:', error);
            });
    }, []);
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plants.map(plant => (
                <Card key={plant.id} title={plant.name !== null ? plant.name : plant.scientific_name} imageUrl={plant.image_url} />
            ))}
        </div>
    );
}
    
export default PlantList;