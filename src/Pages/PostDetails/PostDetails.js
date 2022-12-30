import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { AuthContext } from '../../Context/AuthProvider';

const PostDetails = () => {

    const feed = useLoaderData()

    const { user } = useContext(AuthContext)
    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        fetch(`https://know-me-server.vercel.app/users?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setUserInfo(data)
            })
    }, [user.email])
    const [love, setLove] = useState(true);
    const [comment, setComment] = useState(false);

    const handleOnSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const text = form.comment.value;
        const commenter = userInfo.name;
        const commenterPhoto = userInfo.profilePicture;
        const id = form._id.value;

        const comment = {
            text,
            commenter,
            commenterPhoto,
            id
        }

        fetch(`https://know-me-server.vercel.app/comment`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Comment posted successfully")
                window.location.reload()
            })

    }
    const likeHandler = (like) => {
        setLove(!love)
        const newSLike = like + 1;
        const newLike = { like: newSLike }


        console.log(newLike);
        fetch(`https://know-me-server.vercel.app/like/${feed._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newLike)
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Post liked")
            })
    }


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
            <div className='px-10 py-2 md:px-16 md:py-3 text-md'>
                {feed.status}
            </div>
            <div>
                <img src={feed.photo} alt="" className='max-w-[350px] md:max-w-[600px] lg:max-w-[800px] md:mx-4 my-2' />
            </div>
            <hr />
            <div className='flex justify-evenly'>
                {love ? <button onClick={() => likeHandler()} ><AiOutlineHeart className='text-3xl text-red-600' /></button> :
                    <button onClick={() => setLove(!love)}><AiFillHeart className='text-3xl text-red-600' /></button>}

                <button onClick={() => setComment(!comment)}><FaRegComment className='text-2xl' /></button>
            </div>
            <div>
                <h1 className='mx-2'>Comments</h1>
                {feed?.comment?.map(c =>
                    <div className='border m-2 bg-slate-100 max-w-3xl rounded-lg'>
                        <div className='flex justify-start items-center'>
                            <div className="avatar">
                                <div className="w-8 rounded-full mx-4 my-4">
                                    <img src={c.commenterPhoto} alt="" />
                                </div>
                            </div>
                            <div>
                                <h1 className='text-xl font-bold'>{c.commenter}</h1>
                            </div>
                        </div>
                        <h1 className='mx-4'>{c.text}</h1>
                    </div>
                )}
            </div>

            {
                comment ?
                    <div className='mx-4'>
                        <form onSubmit={handleOnSubmit} >
                            <input type="text" name='_id' className='hidden' defaultValue={feed._id} />
                            <textarea className='rounded-lg p-2 block' name="comment" id="" cols="40" rows="2" placeholder="Add a comment"></textarea>
                            <button type='submit' className=' mx-1 my-2 btn-primary btn btn-xs'>comment</button>
                        </form>
                    </div>
                    : ""
            }
        </div>
    );
};

export default PostDetails;