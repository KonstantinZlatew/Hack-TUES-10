    import { useState } from "react"
    import axios from "axios"
    import { useNavigate, Link } from "react-router-dom"
    import { toast } from "react-hot-toast";
    import useAuthStore from "../stores/authStore";


    function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const setUser = useAuthStore(state => state.setUser)

    async function submit(e: any){
        e.preventDefault();

        if (!password || password.length === 0 || !email || email.length === 0) {
            toast.error("Credentials should not be empty!");
            return;
        }
    
        if(!email.includes('@') || !email.includes('.')){
            toast.error("Invalid email!");
            return;
        }
        /*const data = {
            email: email,
            password: password
        }
        */

        axios.get(`http://localhost:5000/Login/${email}/${password}`)
            .then(res=>{
                if(res.status!=200){
                    toast.error("Invalid email or password")
                }
                else if(res.status==200){
                    toast.success(res.data.user.message)
                    console.log(res.data.user.user)
                    setUser(res.data.user.user)
                    localStorage.setItem("user", JSON.stringify(res.data.user.user))
                    history("/")
                }
            })
            .catch(e=>{
                toast.error("Invalid email or password")
                console.log(e);
            })

        }

    return (
        <div className="my-auto flex-1 max-h-[300px] w-[400px] mx-auto p-4 bg-white rounded shadow-md">
        <h1 className="text-center text-2xl font-bold mb-4">Login</h1>

        <form action="POST">
            <input 
                type="email" 
                onChange={(e) => { setEmail(e.target.value) }} 
                placeholder="Email" 
                className="block w-full px-4 py-3 rounded-md border border-gray-300 mb-3 focus:outline-none focus:border-indigo-500"
            />
            <input 
                type="password" 
                onChange={(e) => { setPassword(e.target.value) }} 
                placeholder="Password" 
                className="block w-full px-4 py-3 rounded-md border border-gray-300 mb-3 focus:outline-none focus:border-indigo-500"
            />
            <button 
                type="submit" 
                onClick={submit} 
                className="text-lg w-full bg-indigo-500 text-white py-3 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
                Login
            </button>
        </form>
        <div className="text-center mt-4">
            <Link to="/Sign-Up" className="text-lg text-indigo-500 underline">Signup</Link>
        </div>
    </div>

    )
    }

    export default Login

    // function Login() {
    //     const [email, setEmail] = useState('');
    //     const [password, setPassword] = useState('');

    //     const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //         setEmail(e.target.value);
    //     };
        
    //     const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //         setPassword(e.target.value);
    //     };

    //     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //         e.preventDefault();
    //         console.log('Email:', email);
    //         console.log('Password:', password);
    //         setEmail('');
    //         setPassword('');
    //     };

    //     const handleSignUpButtonClick = () => {
            
    //         console.log('Redirecting to sign up page...');
    //     };
        
        
    //     return (
    //         <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    //           <div className="sm:mx-auto sm:w-full sm:max-w-md">
    //             <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in to your account</h2>
    //           </div>
        
    //           <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    //             <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
    //               <form className="space-y-6" onSubmit={handleSubmit}>
    //                 <div>
    //                   <label htmlFor="email" className="block text-sm font-medium text-gray-700">
    //                     Email address
    //                   </label>
    //                   <div className="mt-1">
    //                     <input
    //                       id="email"
    //                       name="email"
    //                       type="email"
    //                       autoComplete="email"
    //                       required
    //                       value={email}
    //                       onChange={handleEmailChange}
    //                       className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //                     />
    //                   </div>
    //                 </div>
        
    //                 <div>
    //                   <label htmlFor="password" className="block text-sm font-medium text-gray-700">
    //                     Password
    //                   </label>
    //                   <div className="mt-1">
    //                     <input
    //                       id="password"
    //                       name="password"
    //                       type="password"
    //                       autoComplete="current-password"
    //                       required
    //                       value={password}
    //                       onChange={handlePasswordChange}
    //                       className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //                     />
    //                   </div>
    //                 </div>
    //                 <div>
    //                   <button
    //                     type="submit"
    //                     className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //                   >
    //                     Sign in
    //                   </button>
    //                 </div>
    //               </form>
    //               <div className="mt-6">
    //                   <Link
    //                       to="/Sign-Up"
    //                       className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //                   >
    //                       Sign up
    //                   </Link>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       );
    // }