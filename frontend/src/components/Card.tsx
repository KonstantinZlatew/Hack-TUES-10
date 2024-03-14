interface PlantCardProps {
  title: string;
  imageUrl: string;
}

function Card({title, imageUrl}: PlantCardProps){
  return (
      <div
        className="ml-12 w-72 h-96 mt-12 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <a href="#!">
          <img
            className="rounded-t-lg"
            src={imageUrl}
            alt="No such image available" />
        </a>
        <div className="p-6">
          <h5
            className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {title}</h5>
            <button
              type="button"
              className="inline-block bg-emerald-900 rounded-full  mr-6 bg-primary my-2 px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white
              transition duration-150 ">
              Learn More
            </button>
            <button
              type="button"
              className="inline-block bg-emerald-900 rounded-full bg-primary my-2 px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white
              transition duration-150 ">
              Favorites
            </button>
        </div>
      </div>
  );
}

export default Card