function Card(){
  return (
      <div
        className="ml-12 w-72 h-96 mt-12 pb-8 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:h-2/5 dark:bg-emerald-800">
        <a href="#!">
          <img
            className="rounded-t-lg h-2/3"
            src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
            alt="" />
        </a>
        <div className="p-6">
          <h5
            className=" pb-4 text-xl text-center font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Card title
          </h5>
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