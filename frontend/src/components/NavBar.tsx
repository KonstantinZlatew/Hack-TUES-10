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
      <div className='bg-emerald-200 flex justify-between items-center h-24 mx-auto px-4 text-white w-full pl-80 border-emerald-950 border-b-[3px]'>
        <h1 className='w-full text-3xl font-bold text-emerald-950'>REACT</h1>
        <ul className='hidden md:flex'>
          {navItems.map(item => (
            <li
              key={item.id}
              className='p-4 text-emerald-950 hover:bg-emerald-950 rounded-xl m-2 cursor-pointer duration-300 hover:text-purple-200 '
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