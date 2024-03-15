const backendURL = import.meta.env.VITE_BACKEND_URL;
function Logout() {
    localStorage.clear();
    window.location.href = `${backendURL}`;
}

export default Logout