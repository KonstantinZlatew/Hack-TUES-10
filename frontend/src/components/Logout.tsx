import useAuthStore from "../stores/authStore";

function Logout() {
    const setUser = useAuthStore(state => state.setUser)

    return (
    <li className='p-4 text-white hover:bg-emerald-800 rounded-xl cursor-pointer duration-300 '>
        <button onClick={() => {setUser(null); localStorage.removeItem("user")}}>Log out</button>
     </li>)
}

export default Logout