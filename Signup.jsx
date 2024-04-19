// src/App.js

import { useState } from 'react';
import React from 'react';
import signpenal from '../../assets/gallery/sign.avif';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import  { auth } from '../../FirebaseAuth/FirebaseAuth'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';



const Signup = () => {
  
  const navigateLogin  = useNavigate()
  const [userSignUp, setUserSignUp] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUserSignUp({ ...userSignUp, [e.target.name]: e.target.value });
  
  };

  const handleSubmit = (e) => { // Added 'e' parameter to the function
    e.preventDefault(); // Prevent the default form submission
    if (!userSignUp.username || !userSignUp.email || !userSignUp.password) {
      return toast.error('All fields are Require')
    } else {
      createUserWithEmailAndPassword(auth, userSignUp.email, userSignUp.password)
      .then(async(res)=>{
      const user = res.user

      await updateProfile( user,{
          displayName:userSignUp.username
        });

        navigateLogin('/login')

      })
      .catch((err)=>toast.error(err.message))
    }
  };

  return (
    <>
      <div className="bg-white p-8 rounded shadow-md w-96 ml-[32%] ">
        <img src={signpenal} alt="Login" className="mb-8" />

        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <input type="text" id="username" name="username" className="w-full border rounded-md py-2 px-3"
            value={userSignUp.username} onChange={handleChange}
          />
        </div>
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
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          onClick={handleSubmit}>
          Register
        </button>
        <p className='text-xs text-black mt-5'>Do you have an account?
          <Link to='/lL   ogin'>
            <button className='cursor-pointer text-xs hover:text-blue-400'>Login</button>
          </Link>
        </p>

      </div>
    </>
  );
};

export default Signup;
