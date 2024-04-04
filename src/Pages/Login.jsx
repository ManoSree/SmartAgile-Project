// import React, { useState } from 'react';
// import LoginImage from '../Images/Login.png'; // Assuming Login.png is the image file for the login page

// const LoginPage = () => {
//   // State to manage form data
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   });

//   // Function to handle form field changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your login logic here
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="container mx-auto flex">
//         {/* First Column - Image */}
//         <div className="flex-none w-1/2 p-4">
//           <img src={LoginImage} alt="Login" className="h-full bg-gradient-to-r from-pink-300 via-teal-500 to-pink-300 shadow-orange-50 ml-[110px] rounded-lg w-full object-cover" />
//         </div>

//         {/* Second Column - Login Form */}
//         <div className="flex-grow p-4">
//           <div className="max-w-md h-full w-full bg-white p-4 ml-10 rounded-lg shadow-md">
//             <h2 className="text-3xl mt-[210px] font-bold text-gray-800 mb-6">Login</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label htmlFor="username" className="block text-gray-700 text-lg pr-[300px] font-bold mb-2">Username</label>
//                 <input
//                   type="text"
//                   id="username"
//                   name="username"
//                   value={formData.username}
//                   onChange={handleChange}
//                   placeholder="Enter your username"
//                   className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-[#4D989D]"
//                   required
//                 />
//               </div>
//               <div className="mb-6">
//                 <label htmlFor="password" className="block text-gray-700 text-lg pr-[300px] font-bold mb-2">Password</label>
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="Enter your password"
//                   className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-[#4D989D]"
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="bg-[#4D989D] text-white font-bold py-2 px-4 rounded-lg w-full"
//               >
//                 Sign In
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


// import * as React from "react";
// import { useState } from "react";
// import logo from "../Images/Login.png"
// const Login = () => {
//   const [Username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const credentials = { Username, password };
//     console.log("Credentials:", credentials);
//   };
//   const handleForgotPassword = () => 
//   {
//       alert(
//         "Please check your registered email for a password reset link."
//       );
    
//    };

//   return (
//     <div className="flex flex-col justify-center bg-white max-md:w-full font-pop">
//     <div className="pl-11 w-full  max-md:pl-5 h-screen max-md:max-w-full">
//       <div className="flex gap-5 max-md:flex-col max-md:gap-0">
//         <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
//           <div className="flex flex-col items-center self-stretch my-auto max-md:mt-10 max-md:max-w-full">
           
//             <div className="self-center w-full h-full bg-gradient-to-r from-pink-300 via-teal-500 to-pink-300" >
//             <div className=" ml-12 mb-8 text-6xl font-bold text-white max-md:ml-2.5 max-md:text-4xl">
//               SMART AGILE
//             </div>
//               <img 
//               loading="lazy"
//               srcSet={logo}
            
              
//             />
//               </div>
//             <div className="flex gap-3 justify-center mt-6">
              
//             </div>
            
//           </div>
//         </div>
//           <div className="flex flex-col ml-5 w-[59%] h-[59%] bg-white-300 max-md:ml-0 max-md:w-full">
//             <div className="flex grow justify-center items-center  px-16 py-20 w-full text-xl font-medium text-black bg-gray-200 rounded-[40px_0px_0px_40px] max-md:px-5 max-md:mt-2.5 max-md:max-w-full">
//               <div className="flex flex-col mt-20 max-w-full w-[477px] max-md:mt-10">
//                 <div className=" self-center text-5xl  font-bold max-md:text-4xl font-syne ">Login</div>
//                 <form className="">
                
//                 <fieldset className="border border-black border-solid h-[88px] rounded-[33px] max-md:max-w-full mt-16 flex ">
//                   <legend className="text-left mx-8">Username</legend>
//                   <input 
//                     type="text"
//                     name="text"
//                     className="w-95 rounded-[33px] border border-none outline-none flex-grow text-xl"
//                     value={Username}
//                      onChange={(e) => setUsername(e.target.value)}/>
//                 </fieldset>
//                 <fieldset className="border border-black border-solid h-[88px] rounded-[33px] max-md:max-w-full mt-16 flex  ">
//                   <legend className="text-left mx-8">Password</legend>
//                   <input 
//                     type="password"
//                     name="password"
//                     className="w-95 rounded-[33px] border border-none outline-none flex-grow text-xl"
//                     value={password}
//                      onChange={(e) => setPassword(e.target.value)}/>
//                 </fieldset>
//                 <div className="flex flex-col justify-end">
//                 <p className="text-right mt-5 text-[#4d989d] font-medium cursor-pointer" onClick={handleForgotPassword}>Forgot password?</p></div>
                
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-[#4d989d] focus:ring-[#4d989d] border-gray-300 rounded" />
//               <label htmlFor="remember-me" className="ml-2block text-sm text-black-900">Remember me</label>
//             </div>
//           </div>
//                 <div className="flex flex-col">
//                  <button className="justify-center items-center self-center px-16 py-5 mt-24 text-3xl text-white rounded-[33px] max-md:px-5 max-md:mt-10 max-md:max-w-full bg-[#4d989d] font-syne"
//                  onClick={handleSubmit}>
//                   Login
//                 </button></div>
//                 <div className="flex flex-col justify-end">
//                 <p className="text-center mt-5 text-blue-500 font-medium cursor-pointer" onClick={handleForgotPassword}><span className="text-black">New User</span> Signup</p></div>
//                 </form>
//               </div>
//             </div>
//           </div>
//       </div>
//     </div>
//   </div>

//   )
// }

// export default Login;



import * as React from "react";
import { useState } from "react";
import logo from "../Images/Login.png"

const Login = () => {
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = { Username, password };
    console.log("Credentials:", credentials);
  };

  const handleForgotPassword = () => {
    alert("Please check your registered email for a password reset link.");
  };

  return (
    <div className="flex flex-col justify-center bg-white max-md:w-full font-pop h-screen">
      <div className="pl-11 w-full max-md:pl-5 h-full flex">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <div className="self-center w-full h-full bg-gradient-to-r from-pink-300 via-teal-500 to-pink-300">
                <div className="ml-12 mb-8 text-6xl font-bold text-white max-md:ml-2.5 max-md:text-4xl">
                  SMART AGILE
                </div>
                <img 
                  loading="lazy"
                  srcSet={logo}
                />
              </div>
              <div className="flex gap-3 justify-center mt-6"></div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[59%] bg-white-300 max-md:ml-0 max-md:w-full">
            <div className="flex-grow justify-center items-center  px-16 py-20 w-full text-xl font-medium text-black bg-gray-200 rounded-[40px_0px_0px_40px] max-md:px-5 max-md:mt-2.5 max-md:max-w-full">
              <div className="flex flex-col mt-20 max-w-full w-[477px] max-md:mt-10">
                <div className=" self-center text-5xl  font-bold max-md:text-4xl font-syne ">Login</div>
                <form className="">
                  <fieldset className="border border-black border-solid h-[88px] rounded-[33px] max-md:max-w-full mt-16 flex ">
                    <legend className="text-left mx-8">Username</legend>
                    <input 
                      type="text"
                      name="text"
                      className="w-95 rounded-[33px] border border-none outline-none flex-grow text-xl"
                      value={Username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </fieldset>
                  <fieldset className="border border-black border-solid h-[88px] rounded-[33px] max-md:max-w-full mt-16 flex  ">
                    <legend className="text-left mx-8">Password</legend>
                    <input 
                      type="password"
                      name="password"
                      className="w-95 rounded-[33px] border border-none outline-none flex-grow text-xl"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </fieldset>
                  <div className="flex flex-col justify-end">
                    <p className="text-right mt-5 text-[#4d989d] font-medium cursor-pointer" onClick={handleForgotPassword}>Forgot password?</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-[#4d989d] focus:ring-[#4d989d] border-gray-300 rounded" />
                      <label htmlFor="remember-me" className="ml-2block text-sm text-black-900">Remember me</label>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <button className="justify-center items-center self-center px-16 py-5 mt-24 text-3xl text-white rounded-[33px] max-md:px-5 max-md:mt-10 max-md:max-w-full bg-[#4d989d] font-syne" onClick={handleSubmit}>Login</button>
                  </div>
                  <div className="flex flex-col justify-end">
                    <p className="text-center mt-5 text-blue-500 font-medium cursor-pointer" onClick={handleForgotPassword}><span className="text-black">New User</span> Signup</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
