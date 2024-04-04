// import React,{useState,useEffect} from 'react'
// import Logo from '../Images/logo.png'
// import Profile from '../Images/Profile.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBell } from '@fortawesome/free-solid-svg-icons';

// const Navbar = () => {
//     const[userData,setUserData]=useState({});
//     const[notificationCount,setNotificationCount] = useState(0);

//     useEffect(()=>{
//         fetchUserData();
//     },[]);

//     const fetchUserData = async()=>{
//         try{
//             const response=await fetch("/api/user");
//             const data = await response.json();
//             setUserData(data);
//             setNotificationCount(data.notificationCount);
//         }
//         catch(error){
//             console.error('Error Fetching user data:',error);

//         }
//     }

//   return (
//     <div className='navbar bg-[#4D989D] h-35 p-5 flex items-center justify-between'>
//         <div className='left-section'>
//            <div className='logo-container'> 
//              <img src={Logo} alt="SmartAgile" className='h-12 w-auto'/>
//            </div>
//         </div>

//         <div className='right-section  text-white cursor-pointer'>
//             <div className='profile-container '>
//               <span>{userData.username}</span>
//               <img src={Profile} alt="Profile" className='h-8 w-auto'/>
//             </div> 
           
//         </div>
//         <div className='notification-container h-8 w-auto text-white cursor-pointer'>
//               <span className='notification-count '>{notificationCount} </span>
//               <FontAwesomeIcon icon={faBell} className='h-5 w-5 mt-2' />
//              </div>
        
//     </div>
//   )
// }

// export default Navbar

import React, { useState, useEffect } from 'react';
import Logo from '../Images/logo.png';
import Profile from '../Images/Profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [userData, setUserData] = useState({});
    const [notificationCount, setNotificationCount] = useState(0);

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await fetch("/api/user");
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
            const data = await response.json();
            setUserData(data);
            setNotificationCount(data.notificationCount);
        } catch (error) {
            console.error('Error Fetching user data:', error);
        }
    }

    return (
        <div className='navbar bg-[#4D989D] p-9 flex  items-center justify-between text-white'>
            <div className='left-section'>
                <div className='logo-container'>
                    <img src={Logo} alt="SmartAgile" className='h-12 w-auto' />
                </div>
            </div>
            <div className='right-section flex items-center cursor-pointer'>
               <div className='profile-notification-container flex items-center'>
                   <div className='profile-container mr-4'>
                       <span>{userData.username}</span>
                          <img src={Profile} alt="Profile" className='h-8 w-auto px-10 pr-9 mt-2 ml-8' />
                      </div>
                  <div className='notification-container h-8 w-auto cursor-pointer'>
                      {/* <span className='notification-count'>{notificationCount}</span> */}
                          <FontAwesomeIcon icon={faBell} className='h-5 w-5 mt-2 ml-3' />
        </div>
    </div>
</div>

        </div>
    );
}

export default Navbar;
