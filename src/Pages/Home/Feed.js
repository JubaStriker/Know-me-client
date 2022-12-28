import React, { useState } from 'react';
import img from '../../Assets/LinkedinDP.jpg'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'


const Feed = () => {

    const [love, setLove] = useState(false);
    return (
        <div className='bg-gray-100 mx-6 my-3 py-2 rounded-lg' >
            <div className='flex justify-start items-center'>
                <div className="avatar">
                    <div className="w-14 rounded-full mx-4 my-4">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-bold'>Md Jubair Hossain</h1>
                </div>
            </div>
            <div className='px-10 py-2 md:px-16 md:py-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos perspiciatis possimus, voluptatibus accusantium deserunt cum corporis ipsam! Minima quam, saepe nisi reprehenderit veniam officia numquam ducimus, placeat doloremque quo consectetur aut, nostrum exercitationem! Eveniet itaque, placeat doloribus iure quaerat omnis! Corporis iure quod dicta et necessitatibus soluta quis, delectus beatae!
            </div>
            <hr />
            <div className='flex justify-evenly'>
                {love ? <button onClick={() => setLove(!love)} ><AiOutlineHeart className='text-3xl text-red-600' /></button> :
                    <button onClick={() => setLove(!love)}><AiFillHeart className='text-3xl text-red-600' /></button>}

                <button ><FaRegComment className='text-2xl' /></button>
            </div>
        </div>
    );
};

export default Feed;