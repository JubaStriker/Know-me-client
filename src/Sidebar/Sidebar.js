import React from 'react';
import { FaUserCircle, FaUsers } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { FiShoppingBag } from 'react-icons/fi';
import { RiPagesFill, RiVideoFill } from 'react-icons/ri';
import { HiOutlineTrendingUp } from 'react-icons/hi';
import { RiLogoutCircleRFill } from 'react-icons/ri';
import { BsFillCalendar2EventFill, BsFillBookmarkStarFill } from 'react-icons/bs';

const Sidebar = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex-col items-center justify-center hidden">
                {/* <!-- Page content here --> */}

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li>
                        <h1 className='text-3xl hover:text-white' title='Home'><FaUserCircle /><span className='text-xl'>About</span></h1>
                    </li>
                    <li>
                        <h1 className='text-3xl hover:text-white' title='Home'><FaUsers /><span className='text-xl'>Groups</span></h1>
                    </li>
                    <li>
                        <h1 className='text-3xl hover:text-white' title='Home'><RiPagesFill /><span className='text-xl'>Pages</span></h1>
                    </li>
                    <li>
                        <h1 className='text-3xl hover:text-white' title='Home'><HiOutlineTrendingUp /><span className='text-xl'>Trending</span></h1>
                    </li>
                    <li>
                        <h1 className='text-3xl hover:text-white' title='Home'><RiVideoFill /><span className='text-xl'>Videos</span></h1>
                    </li>
                    <li>
                        <h1 className='text-2xl hover:text-white' title='Home'><BsFillCalendar2EventFill /><span className='text-xl'>Events</span></h1>
                    </li>
                    <li>
                        <h1 className='text-3xl hover:text-white' title='Home'><FiShoppingBag /><span className='text-xl'>Marketplace</span></h1>
                    </li>
                    <li>
                        <h1 className='text-3xl hover:text-white' title='Home'><BsFillBookmarkStarFill /><span className='text-xl'>Saved</span></h1>
                    </li>
                    <li>
                        <h1 className='text-3xl hover:text-white' title='Home'><AiFillSetting /><span className='text-xl'>Settings</span></h1>
                    </li>
                    <li>
                        <h1 className='text-3xl hover:text-white' title='Home'><RiLogoutCircleRFill /><span className='text-xl'>Log out</span></h1>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Sidebar;