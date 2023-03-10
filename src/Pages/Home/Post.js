import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../Loading/Loading';

const Post = () => {

    const { user } = useContext(AuthContext)
    const [userInfo, setUserInfo] = useState({})
    const imageHostKey = process.env.REACT_APP_imagebb_key;
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        fetch(`https://know-me-server.vercel.app/users?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setUserInfo(data)
            })
    }, [user.email])


    const handleOnSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const status = form.status.value;
        const photo = form.photo.files[0];
        const formData = new FormData();
        formData.append('image', photo);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;


        if (photo) {
            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(imageData => {
                    setLoading(true);
                    const photo = imageData.data.url;
                    const post = {
                        name: userInfo.name,
                        email: userInfo.email,
                        profilePicture: userInfo.profilePicture,
                        like: 0,
                        status: status,
                        photo: photo,
                        comment: []
                    }
                    fetch(`https://know-me-server.vercel.app/post`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(post)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            setLoading(false)
                            if (data.acknowledged === true) {
                                toast.success("Status updated")
                                window.location.reload()
                            }
                        })

                });

        }
        else {
            const post = {
                name: userInfo.name,
                email: userInfo.email,
                profilePicture: userInfo.profilePicture,
                like: 0,
                status: status,
                comment: []
            }

            fetch(`https://know-me-server.vercel.app/post`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(post)
            })
                .then(res => {
                    res.json()
                })
                .then(data => {
                    console.log(data)
                    toast.success("Status updated")
                    setLoading(false)
                    if (data.acknowledged === "true") {
                        toast.success("Status updated")
                        window.location.reload()
                    }
                })
        }

    };

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className=' bg-base-200 mx-6 my-3 py-2 rounded-lg'>
            <div className='flex items-center'>
                <div className="avatar">
                    <div className="w-20 rounded-full mx-4 my-4">
                        <img src={userInfo.profilePicture} alt="" />
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>{userInfo.name}</h1>
                </div>
            </div>
            <form onSubmit={handleOnSubmit} action="">
                <div className='flex flex-col md:flex-row'>
                    <div>
                        <div className='mx-4'>
                            <textarea className='rounded-lg p-2 w-72' name="status" id="" cols="40" rows="3" placeholder="What's on your mind?"></textarea>
                        </div>
                    </div>
                    <div className='mx-4'>
                        <h1>Add photos</h1>
                        <input type="file" name='photo' className="file-input file-input-bordered file-input-primary w-72  max-w-xs" />
                    </div>
                </div>
                <div>
                    <button type='submit' className='mx-4 my-2 btn btn-sm btn-primary shadow-lg hover:text-white hover:border-2 
                hover:border-green-900'>POST</button>
                </div>
            </form>

        </div >
    );
};

export default Post;