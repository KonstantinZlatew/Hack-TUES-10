import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

type Plant = {
    name: string;
    image_url: string;
    scientific_name:string;
    id: number;
    family: string;
    year:number;
    genus:string;
}

const backendURL = import.meta.env.VITE_BACKEND_URL;

function PlantPage () {
    const { PlantId } = useParams();
    console.log(PlantId);
    const [plant, setPlant] = useState<Plant | null>(null);

    useEffect(() => {
        fetch(`${backendURL}/get_plant_by_id/${PlantId}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch plant form Id');
                }
                
                return res.json();
            })
            .then(data => {
                setPlant(data.plant);
                console.log(plant);
            })
            .catch(error => {
                console.error('Error fetching plant by Id:', error);
            });
    }, [PlantId]);
    return (
        <>
            <div className="flex items-center flex flex-1 my-32 justify-center h-full">
            {plant ? (
                <div className="flex flex-col items-center justify-center text-center">
                <h1 className="text-3xl font-bold mb-4">Information about the plant</h1>
                <p className="text-lg">{plant.name}</p>
                <p className="text-lg">Genus: {plant.genus}</p>
                <p className="text-lg">{plant.scientific_name}</p>
                <img className="rounded-lg h-60 w-auto mt-4" src={plant.image_url} alt="Plant" />
                <p className="text-lg">{plant.family}</p>
                </div>
            ) : (
                <p className="text-xl font-medium ">Loading...</p>
            )}
            </div>
        </>
    )

}
export default PlantPage;