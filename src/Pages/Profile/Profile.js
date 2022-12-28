import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { AiFillEdit } from 'react-icons/ai'
import EditModal from './EditModal';
const Profile = () => {

    const { user } = useContext(AuthContext)
    const [userInfo, setUserInfo] = useState({})


    useEffect(() => {
        fetch(`http://localhost:5000/users?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setUserInfo(data)
            })
    }, [user.email])



    return (
        <div className='p-5'>
            <div className='flex justify-end'>
                <label htmlFor="my-modal-5" className="btn btn-success">Edit  <AiFillEdit /></label>
            </div>
            <form>
                <div className="avatar">
                    <div className="w-36 rounded-full">
                        <img src={userInfo.profilePicture} alt="" />
                    </div>
                </div>

                <div>
                    <h1 className='text-4xl md:text-5xl'>{userInfo.name}</h1>
                    <h1 className='text-2xl'>{userInfo.age} years old</h1>
                </div>
                <div className='mt-8'>
                    <h1 className='text-3xl'>Personal information</h1>
                </div>

                <div>
                    <h1 className='text-xl my-2'>Email: {userInfo.email}</h1>
                </div>
                <div>
                    <h1 className='text-xl my-2'>Sex: {userInfo.gender}</h1>
                </div>
                <div>
                    <h1 className='text-xl my-2'>Education: {userInfo.education}</h1>
                </div>
                <div>
                    <h1 className='text-xl my-2'>Hometown: {userInfo.hometown}</h1>
                </div>
                <div>
                    <h1 className='text-xl my-2'>Relationship status: {userInfo.relationshipStatus}</h1>
                </div>

            </form>
            <EditModal
                userInfo={userInfo}
            />
        </div>
    );
};

export default Profile;