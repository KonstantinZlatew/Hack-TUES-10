import { useState } from "react";

const Navbar = () => {
    const [nav, setNav] = useState(false);
  
    const navItems = [
      { id: 1, text: 'Home' },
      { id: 2, text: 'Favourites' },
      { id: 3, text: 'Notifications' },
      { id: 4, text: 'Profile' },
    ];
  
    return (
      <div className='pr-20 sticky top-0 bg-gradient-to-r from-emerald-800 to-pink-300 flex justify-between items-center gap-x-4 h-24 mx-auto px-4 text-white w-full pl-12'>
        <h1 className='text-3xl font-bold text-white'>Botanical Buddy</h1>
        {/* <div className="mt-4"> */}
            <div className="w-96">
                <input
                    type="search"
                    className="w-full rounded-full m-0 block min-w-0 border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-300 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon1" />
            </div>
        {/* </div> */}
        <ul className='hidden md:flex md:items-center md:gap-1'>
          {navItems.map(item => (
            <li
              key={item.id}
              className='p-4 text-white hover:bg-emerald-800 rounded-xl cursor-pointer duration-300 '
            >
              {item.text}
            </li>
          ))}
        </ul>
        <ul
          className={
            nav
              ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
              : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
          }
        >
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Botanical Buddy</h1>
          {navItems.map(item => (
            <li
              key={item.id}
              className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default Navbar