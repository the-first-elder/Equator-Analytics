import React from "react";
import { AiFillHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { IoMdAnalytics } from "react-icons/io";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { GoTasklist } from "react-icons/go";
// test
const Header = () => {
  const activeStyle = {
    background: '#771011',
    color: '#FFFFFF',
    borderRadius: '10px',
    padding: '5px 20px'
  };

  return (
    <header className="flex text-brown text-[40px] px-4 py-6 justify-between border-t border-brown items-center bg-secondary">
      <NavLink to='/dashboard' style={({isActive}) => isActive ? activeStyle : null } end>
        <AiFillHome />
      </NavLink> 
      <NavLink to='analytics' style={({isActive}) => isActive ? activeStyle : null }>
        <IoMdAnalytics />
      </NavLink>
      <NavLink to='launchpad' style={({isActive}) => isActive ? activeStyle : null }>
        <BsFillRocketTakeoffFill />
      </NavLink>
      <NavLink to='quests' style={({isActive}) => isActive ? activeStyle : null }>
        <GoTasklist />
      </NavLink>
    </header>
  );
};

export default Header;
