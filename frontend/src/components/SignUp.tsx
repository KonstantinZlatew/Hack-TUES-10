import { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import toast from 'react-hot-toast'
import useAuthStore from "../stores/authStore"

function Login() {
  const history=useNavigate();

  const [username, setUsername] = useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const setUser = useAuthStore(state => state.setUser)

  async function submit(e: any){
    e.preventDefault();

    if (!username || username.length === 0 || !password || password.length === 0 || !email || email.length === 0) {
      toast.error("Credentials should not be empty");
      return;
    }

    if(!email.includes('@') || !email.includes('.')){
      toast.error("Invalid email!");
      return;
    }

    axios.post("http://localhost:5000/user",{
        username,email,password
    })
    .then(res=>{
        if(res.status!=200){
            toast.error("User already exists")
        }
        else if(res.status==200){
          toast.success("Account successfully created!")
          setUser(res.data.data.user)
          localStorage.setItem("user", JSON.stringify(res.data.data.user))
          history("/")
        }
    })
    .catch(e=>{
        toast.error("This account already exists!")
        console.log(e);
    })
  }


  return (
    <div className="bg-pink-200 h-screen">
      <Link to={"/"}>
        <button className="m-7 p-4 bg-emerald-800 hover:bg-emerald-900 rounded-full text-white">Go Back</button>
      </Link>
      <div className="my-40 flex-1 max-h-[365px] w-[400px] mx-auto p-4 bg-white rounded shadow-md">
        <h1 className="text-center text-2xl font-bold mb-4 text-emerald-800">Signup</h1>
        <form action="POST">
          <input 
            type="username" 
            onChange={(e) => { setUsername(e.target.value) }} 
            placeholder="Username" 
            className="block w-full px-4 py-3 rounded-md border border-gray-300 mb-3 focus:outline-none focus:border-indigo-500"
          />
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
          <Link to='/Login'>
            <button 
              type="submit" 
              onClick={submit} 
              className="text-lg w-full bg-emerald-800 text-white py-3 rounded-md hover:bg-emerald-900 focus:outline-none focus:bg-emerald-800"
            >
              Sign up
            </button>
          </Link>
        </form>
        <div className="text-center mt-4">
          <Link to="/Login" className="text-lg text-emerald-800 underline">Login Page</Link>
        </div>
      </div>
    </div>
  )
}

export default Login

// import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";

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
//         // Handle navigation to sign up page or any other action
//         console.log('Redirecting to sign up page...');
//         };
    
    
//     return (
//         <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//           <div className="sm:mx-auto sm:w-full sm:max-w-md">
//             <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up</h2>
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
    
//                 <div className="mt-6">
//                     <Link
//                         to="/Login"
//                         className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                     >
//                         Login
//                     </Link>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       );
// }

// export default Login;