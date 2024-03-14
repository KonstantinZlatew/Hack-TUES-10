import { useState } from "react";

const Navbar = () => {
    const [nav, setNav] = useState(false);
  
    const navItems = [
      { id: 1, text: 'Home' },
      { id: 2, text: 'Company' },
      { id: 3, text: 'Resources' },
      { id: 4, text: 'About' },
      { id: 5, text: 'Contact' },
    ];
  
    return (
      <div className='bg-black flex justify-between items-center h-24 mx-auto px-4 text-white w-full pl-64'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT</h1>
        <div className="mt-4 md:w-1/2 mr-24">
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                <input
                    type="search"
                    className="rounded-full w-screen relative m-0 -mr-0.5 block min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-300 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon1" />
            </div>
        </div>
        <ul className='hidden md:flex'>
          {navItems.map(item => (
            <li
              key={item.id}
              className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
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
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT</h1>
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