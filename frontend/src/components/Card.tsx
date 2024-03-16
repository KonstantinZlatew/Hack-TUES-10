import { Link } from "react-router-dom";
import axios from 'axios';
import useAuthStore from "../stores/authStore";
import toast from "react-hot-toast";

interface PlantCardProps {
  title: string;
  imageUrl: string;
  id: number;
  favourite: boolean;
}

function Card({title, imageUrl, id, favourite}: PlantCardProps){
  const user = useAuthStore((state) => state.user);

  // async function handleAddToFavourites() {
  //   axios.put(`http://localhost:5000/users/${user?.id}/plants/${id}`)
  //           .then(res => {
              
  //           })
  //           .then(data => {
  //               // setPlant(data.plant);
  //               // console.log(plant);
  //           })
  //           .catch(error => {
  //               console.error('Error fetching plant by Id:', error);
  //           });
  // }
  async function handleAddToFavourites() {
    try {
        // console.log("USERID:", user?.id);
        const response = await axios.put(`http://localhost:5000/users/${user?.id}/plants/${id}`);
        // if (response.status === 200) {
        //     // Plant successfully added to favorites
        //     alert('Plant added to favorites!');
        //     // Optionally, you can perform additional actions here
        // }
        // console.log(response)
        toast.success(`Plant ${title} successfully added to favourites`);
    } catch (error) {
        console.error('Error adding plant to favorites:', error);
        toast.error('Failed to add plant to favorites. Please try again.');
    }
}


  return (
      <div
        className="ml-12 w-72 h-96 mt-12 block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
        bg-emerald-800">
          <img
            className="rounded-t-lg h-3/5 w-full"
            src={imageUrl}
            alt="No such image available" />
        <div className="p-6">
          <h5
            className="mb-2 text-xl font-medium leading-tight text-white text-center">
            {title}</h5>
            <Link to={`/Plants/${id}`}>
              <button
                type="button"
                className="inline-block my-6 border-[1px] rounded-full mr-6 bg-primary my-2 px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150"
              >
                Learn More
              </button>
            </Link>
            {!favourite ? <button
              type="button"
              title="Add to favourites"
              className="inline-block border-[1px] rounded-full bg-primary my-2 px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white
              transition duration-150"
              onClick={handleAddToFavourites}>
              Favourites
            </button> : <span className="text-white italic uppercase">Is favourite!</span>}
        </div>
      </div>
  );
}

export default Card