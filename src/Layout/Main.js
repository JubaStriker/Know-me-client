import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import Navbar from '../Pages/Navbar/Navbar';
import { FaUserCircle, FaUsers } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { FiShoppingBag } from 'react-icons/fi';
import { RiPagesFill, RiVideoFill } from 'react-icons/ri';
import { HiOutlineTrendingUp } from 'react-icons/hi';
import { RiLogoutCircleRFill } from 'react-icons/ri';
import { BsFillCalendar2EventFill, BsFillBookmarkStarFill } from 'react-icons/bs';
import { AuthContext } from '../Context/AuthProvider';

const Main = () => {

    const { logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 lg:bg-inherit text-base-content">
                        {/* <!-- Sidebar content here --> */}

                        <li>
                            <NavLink
                                to="/profile"
                                className={({ isActive }) =>
                                    isActive ? 'text-4xl text-blue-600' : 'text-4xl hover:text-blue-600'
                                }><div className='text-4xl hover:text-blue-600 flex items-center gap-3' title='Home'>
                                    <div><FaUserCircle /></div>
                                    <div className='text-xl'>About</div>
                                </div>
                            </NavLink>
                        </li>

                        <li>
                            <h1 className='text-3xl hover:text-blue-600' title='Home'><FaUsers /><span className='text-xl'>Groups</span></h1>
                        </li>
                        <li>
                            <h1 className='text-3xl hover:text-blue-600' title='Home'><RiPagesFill /><span className='text-xl'>Pages</span></h1>
                        </li>
                        <li>
                            <h1 className='text-3xl hover:text-blue-600' title='Home'><HiOutlineTrendingUp /><span className='text-xl'>Trending</span></h1>
                        </li>
                        <li>
                            <h1 className='text-3xl hover:text-blue-600' title='Home'><RiVideoFill /><span className='text-xl'>Videos</span></h1>
                        </li>
                        <li>
                            <h1 className='text-2xl hover:text-blue-600' title='Home'><BsFillCalendar2EventFill /><span className='text-xl'>Events</span></h1>
                        </li>
                        <li>
                            <h1 className='text-3xl hover:text-blue-600' title='Home'><FiShoppingBag /><span className='text-xl'>Marketplace</span></h1>
                        </li>
                        <li>
                            <h1 className='text-3xl hover:text-blue-600' title='Home'><BsFillBookmarkStarFill /><span className='text-xl'>Saved</span></h1>
                        </li>
                        <li>
                            <h1 className='text-3xl hover:text-blue-600' title='Home'><AiFillSetting /><span className='text-xl'>Settings</span></h1>
                        </li>
                        <li onClick={handleLogOut}>
                            <h1 className='text-3xl hover:text-blue-600' title='Home'><RiLogoutCircleRFill /><span className='text-xl'>Log out</span></h1>
                        </li>
                    </ul>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Main;