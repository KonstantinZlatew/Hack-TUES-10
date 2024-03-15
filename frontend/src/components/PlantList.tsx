import { useState, useEffect } from "react";
import Card from "./Card";

type Plant = {
    name: string;
    image_url: string;
    scientific_name:string;
    id: number;
}

const backendURL = import.meta.env.VITE_BACKEND_URL;

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
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching random plants:', error);
            });
    }, []);
    
    return (
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mb-10">
            {plants.map(plant => (
                <Card key={plant.id} id={plant.id} title={plant.name !== null ? plant.name : plant.scientific_name} imageUrl={plant.image_url} />
            ))}
        </div>
    );
}
    
export default PlantList;