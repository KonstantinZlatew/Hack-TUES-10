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
        // <div className="static absolute bottom-0 left-0">
      <div
        className={`w-52 bg-emerald-950 h-screen p-5 pt-8 relative duration-300 border-r-[3px] border-purple-200`}
      >
        {/* <h1 className={`text-purple-800 absolute cursor-pointer -right-3 start-60 top-8 w-7 bg-green-100
           border-2 border-green-100 rounded-full  ${!open && "rotate-180 start-14" }`}
          onClick={() => setOpen(!open)}>
            ⬅

        </h1> */}
        {/* <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        /> */}
        <div className="flex gap-x-4 items-center">
          
          <h1
            className={`text-purple-200 origin-left mb-2 border-b-[3px] border-purple-200 font-medium text-3xl duration-200 pb-5 ${
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
              className={`flex  rounded-md p-2 cursor-pointer duration-300 text-purple-200 hover:text-emerald-950 text-base items-center gap-x-4
              bg-emerald-950 hover:bg-purple-200
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