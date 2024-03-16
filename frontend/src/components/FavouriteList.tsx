import { useState, useEffect } from "react";
import Card from "./Card";
import useAuthStore from "../stores/authStore";
import toast from "react-hot-toast";
import { Plant } from "../types/types";
const backendURL = import.meta.env.VITE_BACKEND_URL;

function FavouriteList() {
    const [plants, setPlants] = useState<Plant[]>([]);
    const user = useAuthStore(state => state.user);

    useEffect(() => {
        fetch(`${backendURL}/plants/${user?.id}`)
            .then(res => {
                if (!res.ok) {
                    toast.error('Failed to fetch the users plants plants');
                    return;
                }
                return res.json();
            })
            .then(data => {
                const plants: Plant[] = data.plants;
                setPlants(plants);
            })
            .catch(error => {
                console.error('Error fetching users plants:', error);
                toast.error('Error fetching users plants:', error)
            });
    }, []);
    
    return (
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mb-10">
            {plants.map(plant => (
                <Card key={plant.id} favourite id={plant.id} title={plant.name !== null ? plant.name : plant.scientific_name} imageUrl={plant.image_url} />
            ))}
        </div>
    );
}
    
export default FavouriteList;