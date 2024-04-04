
import React,{useState} from 'react';
import { MdDashboard } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const[selectedOption,setSelectedOption] = useState("project");


  const handleOptionClick=(option)=>{
    setSelectedOption(option);
  };
  return (
    <div className="sidebar w-60  flex-grow fixed top-30 left-0 h-screen bg-[#4D989D] bg-opacity-5 text-black p-5 items-center justify-center">
      <ul className='list-none'>
        <li className='flex flex-grow items-center mb-8 ml-4 mt-10'>
          <NavLink to='/dashboard'className={`flex items-center cursor-pointer ${
            selectedOption === "Dashboard"
              ? "bg-[#4D989D] w-screen rounded-r-lg text-white"
              : ""
          }`}
          onClick={() => handleOptionClick("Dashboard")} >
          
            <MdDashboard className='mr-2' />
            Dashboard
          </NavLink>
        </li>
        <li className='flex items-center mb-8 ml-4 '>
          <NavLink to='/project'  className={`flex items-center cursor-pointer ${
            selectedOption === "Project"
              ? "bg-[#4D989D] w-screen rounded-r-lg text-white"
              : ""
          }`}
          onClick={() => handleOptionClick("Project")}>
            <AiFillProject className='mr-2' />
            Project
          </NavLink>
        </li>
        <li className='flex items-center mb-8 ml-4 '>
          <NavLink to='/Taskhub' className={`flex items-center cursor-pointer ${
            selectedOption === "Task Hub"
              ? "bg-[#4D989D] w-screen rounded-r-lg text-white"
              : ""
          }`}
          onClick={() => handleOptionClick("Task Hub")}>
            <FaTasks className='mr-2' />
            TaskHub
          </NavLink>
        </li>
        <li className='flex items-center mb-8 ml-4 '>
          <NavLink to='/Chat' className={`flex items-center cursor-pointer ${
            selectedOption === "Chat"
              ? "bg-[#4D989D] w-screen rounded-r-lg text-white"
              : ""
          }`}
          onClick={() => handleOptionClick("Chat")}>
            <BsChatDotsFill className='mr-2' />
            Chat
          </NavLink>
        </li>
        <li className='flex items-center mb-8 ml-4 '>
          <NavLink to='/setting' className={`flex items-center cursor-pointer ${
            selectedOption === "Settings"
              ? "bg-[#4D989D] w-screen rounded-r-lg text-white "
              : ""
          }`}
          onClick={() => handleOptionClick("Settings")}>
            <IoSettings className='mr-2' />
            Settings
          </NavLink>
        </li>
      </ul>

    </div>
  )
}

export default Sidebar;
