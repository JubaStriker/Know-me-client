import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'

const FeedElement = ({ feed }) => {

    console.log(feed);
    const [love, setLove] = useState(true);
    return (
        <div className='bg-gray-100 mx-6 my-3 py-2 rounded-lg' >
            <div className='flex justify-start items-center'>
                <div className="avatar">
                    <div className="w-14 rounded-full mx-4 my-4">
                        <img src={feed.profilePicture} alt="" />
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-bold'>{feed.name}</h1>
                </div>
            </div>
            <div className='px-10 py-2 md:px-16 md:py-3'>
                {feed.status}
            </div>
            <div>
                <img src={feed.photo} alt="" className='max-w-[350px] md:max-w-[600px] lg:max-w-[800px] md:mx-4 my-2' />
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

export default FeedElement;