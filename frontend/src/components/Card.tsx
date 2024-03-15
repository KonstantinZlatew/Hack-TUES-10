interface PlantCardProps {
  title: string;
  imageUrl: string;
}

function Card({title, imageUrl}: PlantCardProps){
  return (
      <div
        className="ml-12 w-72 h-96 mt-12 block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-white">
        <a href="#!">
          <img
            className="rounded-t-lg h-3/5 w-full"
            src={imageUrl}
            alt="No such image available" />
        </a>
        <div className="p-6">
          <h5
            className="mb-2 text-xl font-medium leading-tight text-zinc-950 text-center">
            {title}</h5>
            <button
              type="button"
              className="inline-block bg-emerald-800 rounded-full mr-8 bg-primary my-6 px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white
              transition duration-150 ">
              Learn More
            </button>
            <button
              type="button"
              className="inline-block bg-emerald-800 rounded-full bg-primary my-2 px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white
              transition duration-150 ">
              Favorites
            </button>
        </div>
      </div>
  );
}

export default Card