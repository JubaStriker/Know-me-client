import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai'
import { BsFillPeopleFill } from 'react-icons/bs'
import { RiNotification2Fill, RiSearchLine, RiMessage2Fill } from 'react-icons/ri'
import logo from '../../Assets/logo black.png'

const Navbar = () => {
    return (
        <div className="navbar bg-primary shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                        <li><h1 className='text-4xl hover:text-white' title='Home'><AiFillHome /><span className='text-2xl'>Home</span></h1></li>
                        <li>
                            <h1 className='text-4xl hover:text-white' title='Friends'><BsFillPeopleFill /> <span className='text-2xl'>Home</span></h1>
                        </li>
                        <li>
                            <h1 className='text-4xl hover:text-white' title='Notifications'><RiNotification2Fill />  <span className='text-2xl'>Notification</span></h1>
                        </li>
                        <li>
                            <h1 className='text-4xl hover:text-white' title='Messages'><RiMessage2Fill />  <span className='text-2xl'>Messages</span></h1>
                        </li>
                        <li className="form-control flex">
                            <h1 className='text-4xl hover:text-white' title='Find'><RiSearchLine /> <span className='text-2xl'>Find</span></h1>
                            <input type="text" placeholder="Search" className="input input-bordered h-10 w-48" />
                        </li>
                    </ul>
                </div>
                <Link to='/home' >
                    <img src={logo} alt="logo" className="h-14 w-28" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink
                            to="/home"
                            className={({ isActive }) =>
                                isActive ? 'text-4xl text-white border-b-4' : 'text-4xl hover:text-white'
                            }><h1 className='text-4xl hover:text-white' title='Home'><AiFillHome /></h1>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/friends"
                            className={({ isActive }) =>
                                isActive ? 'text-4xl text-white border-b-4' : 'text-4xl hover:text-white'
                            }><h1 className='text-4xl hover:text-white' title='Friends'><BsFillPeopleFill /></h1></NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/notifications"
                            className={({ isActive }) =>
                                isActive ? 'text-4xl text-white border-b-4' : 'text-4xl hover:text-white'
                            }><h1 className='text-4xl hover:text-white' title='Notifications'><RiNotification2Fill /></h1></NavLink>
                    </li>
                    <li className='indicator'>
                        <NavLink
                            to="/message"
                            className={({ isActive }) =>
                                isActive ? 'text-4xl text-white border-b-4' : 'text-4xl hover:text-white'
                            }>
                            <h1 className='text-4xl hover:text-white' title='Messages'><RiMessage2Fill /></h1>
                        </NavLink>
                    </li>
                    <li className="form-control flex items-center">
                        <h1 className='text-4xl hover:text-white' title='Find'><RiSearchLine /></h1>
                        <input type="text" placeholder="Search" className="input input-bordered h-10" />
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
        </div>
    );
};

export default Navbar;