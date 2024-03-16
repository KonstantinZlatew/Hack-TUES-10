import { useState, useEffect } from "react";
import Card from "./Card";
import useAuthStore from "../stores/authStore";
import toast from "react-hot-toast";
import { Plant } from "../types/types";

const backendURL = import.meta.env.VITE_BACKEND_URL;

function PlantList() {
    const [plants, setPlants] = useState<Plant[]>([]);

    const user = useAuthStore(state => state.user);
    console.log(user);

    useEffect(() => {
        fetch(`${backendURL}/get_random_plants`)
            .then(res => {
                if (!res.ok) {
                    toast.error('Failed to fetch random plants');
                    return;
                }
                return res.json();
            })
            .then(data => {
                const plants: Plant[] = data.plants;
                setPlants(plants);
            })
            .catch(error => {
                console.error('Error fetching random plants:', error);
                toast.error('Error fetching random plants:', error)
            });
    }, []);
    
    return (
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mb-10 bg-pink-200">
            {plants.map(plant => (
                <Card key={plant.id} id={plant.id} title={plant.name !== null ? plant.name : plant.scientific_name} imageUrl={plant.image_url} />
            ))}
        </div>
    );
}
    
export default PlantList;