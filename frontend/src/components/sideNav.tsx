import { useState } from "react";

function SideNav() {
    const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Liana", src: "Chart_fill" },
    { title: "Subshrub", src: "Chat" },
    { title: "Shrub ", src: "Calendar" },
    { title: "Tree", src: "Search" },
    { title: "Parasite", src: "Chart" }
  ];

    return (
      <div
        className={`sticky left-0 top-0 w-52 bg-gradient-to-b from-emerald-800 to-pink-300 h-screen p-5 pt-8 relative duration-300 `}
      >
        <div className="flex gap-x-4 items-center ">
          
          <h1
            className={`text-white origin-left mb-2 border-b-[3px] border-white font-medium text-3xl duration-200 pb-5 ${
              !open && "scale-0"
            }`}
          >
            Categories
          </h1>
        </div>
        <ul className="pt-6 ">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer text-white text-base hover:text-xl items-center gap-x-4
             ${
                index === 0 && "bg-light-white"
              } `}
            >
              <span className={`${!open && "hidden"} origin-left duration-300`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    )
}

export default SideNav