// src/App.js
import React, { useState } from 'react'

import loginImage from '../../assets/login.png';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import  { auth } from '../../FirebaseAuth/FirebaseAuth'
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginPanel = () => {
  
  const navigateHome  = useNavigate()
  const [userSignUp, setUserSignUp] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUserSignUp({ ...userSignUp, [e.target.name]: e.target.value });
  
  };

  const handleSubmit = (e) => { // Added 'e' parameter to the function
    e.preventDefault(); // Prevent the default form submission
    if (!userSignUp.email || !userSignUp.password) {
      return toast.error('All fields are Require')
    } else {
      signInWithEmailAndPassword(auth, userSignUp.email, userSignUp.password)
      .then(async(res)=>{
      const user = res.user

      navigateHome('/')

     
      })
      .catch((err)=>toast.error(err.message))
    }
  };

  return (
    <>

    {/* <div className="flex items-center justify-center h-screen bg-gray-200 m-[0px]"> */}
      <div className="bg-white p-8 rounded shadow-md w-96 ml-[32%] ">
        <img src={loginImage} alt="Login" className="mb-8" />
        <div className='mb-4'>

          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input autoComplete='off' type="text" id="email" name="email" className="w-full border rounded-md py-2 px-3"
            value={userSignUp.email} onChange={handleChange}
          />
        </div>
         <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input autoComplete='off' type="password" id="password" name="password" className="w-full border rounded-md py-2 px-3"
            value={userSignUp.password} onChange={handleChange}
          />
        </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 " 
                onClick={handleSubmit} >Login</button>
          <p className='text-xs text-black mt-5'>Don't have an account?
          <Link to='/signup'>
           <button className='cursur-pointer text-xs hover:text-blue-400'>
            sign Up</button> </Link>
             </p>

      </div>
 
    </>
  );
};

export default LoginPanel;
