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
    description:string;
}

const backendURL = import.meta.env.VITE_BACKEND_URL;

function PlantPage () {
    const { plantId } = useParams();
    const [plant, setPlant] = useState<Plant | null>(null);

    useEffect(() => {
        fetch(`${backendURL}/get_plant_by_id/${plantId}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch plant form Id');
                }
                
                return res.json();
            })
            .then(data => {
                setPlant(data.plant);
                console.log("PLANT:", plant);
            })
            .catch(error => {
                console.error('Error fetching plant by Id:', error);
            });
    }, [plantId]);
    return (
        <>
            <div className="h-full bg-gradient-to-r from-emerald-800 to-pink-300 flex-1">
            {plant ? (
                <div className="flex">
                    <img className="rounded-lg  h-[600px] w-[500px] m-10" src={plant.image_url} alt="Plant" />
                    <div className="flex flex-col items-center flex flex-1 justify-center h-full w-[300px]">
                        <h1 className="text-3xl px-72 text-emerald-900 text-center font-bold mt-24 mb-4">Information about the plant</h1>
                        <p className="text-lg"><span className="font-bold text-emerald-900">NAME: </span> {plant.name}</p>
                        <p className="text-lg"><span className="font-bold text-emerald-900">GENUS: </span>{plant.genus}</p>
                        <p className="text-lg"><span className="font-bold text-emerald-900">SPECIFIC NAME: </span>{plant.scientific_name}</p>
                        <p className="text-lg"><span className="font-bold text-emerald-900">FAMILY: </span>{plant.family}</p>
                        <p className="text-lg w-[600px] text-center"><span className="font-bold text-emerald-900">DESCRIPTION: </span>{plant.description}</p>
                    </div>
                </div>
            ) : (
                <p className="text-xl font-medium ">Loading...</p>
            )}
            </div>
            {/* <div className="flex items-center flex flex-1 py-36 justify-center h-full">
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
            </div> */}
        </>
    )

}
export default PlantPage;