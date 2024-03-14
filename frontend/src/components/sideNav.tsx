import { useState } from "react";

function SideNav() {
    const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

    return (
        <div className="static absolute bottom-0 left-0">
      <div
        className={` ${
          open ? "w-72" : "w-24 "
        } bg-emerald-950 h-screen p-5 pt-8 relative duration-300`}
      >
        <h1 className={`text-purple-800 absolute cursor-pointer -right-3 start-60 top-8 w-7 bg-green-100
           border-2 border-green-100 rounded-full  ${!open && "rotate-180 start-14" }`}
          onClick={() => setOpen(!open)}>
            ⬅

        </h1>
        {/* <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        /> */}
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-purple-300 origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Categories
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    )
}

export default SideNav