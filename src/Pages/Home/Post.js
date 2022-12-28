import React from 'react';
import img from '../../Assets/LinkedinDP.jpg'

const Post = () => {
    return (
        <div className=' bg-base-200 mx-6 my-3 py-2 rounded-lg'>
            <div className='flex items-center'>
                <div className="avatar">
                    <div className="w-20 rounded-full mx-4 my-4">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>Md Jubair Hossain</h1>
                </div>
            </div>
            <div className='flex flex-col md:flex-row'>
                <div>
                    <div className='mx-4'>
                        <textarea className='rounded-lg' name="" id="" cols="30" rows="3" defaultValue="What's on your mind?"></textarea>
                    </div>
                </div>
                <div className='mx-4'>
                    <h1>Add photos</h1>
                    <input type="file" name='profilePicture' className="file-input file-input-bordered file-input-primary w-72  max-w-xs" />
                </div>
            </div>
            <div>
                <button className='mx-4 my-2 btn btn-sm btn-primary shadow-lg hover:text-white hover:border-2 
                hover:border-green-900'>POST</button>
            </div>
        </div>
    );
};

export default Post;