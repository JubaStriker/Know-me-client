import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import { Player } from '@lottiefiles/react-lottie-player';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../Loading/Loading';
import { toast } from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';


const Signup = () => {

    const { createUser, updateUser, providerLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const [signInError, setSignInError] = useState("")
    const [page1, setPage1] = useState(true)
    const [loading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const imageHostKey = process.env.REACT_APP_imagebb_key;
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';


    const handleOnSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const gender = form.gender.value;
        const age = form.age.value;
        const hometown = form.hometown.value;
        const relationshipStatus = form.relationshipStatus.value;
        const profilePicture = form.profilePicture.files[0];
        const formData = new FormData();
        formData.append('image', profilePicture);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                setIsLoading(true)
                const photoURL = imageData.data.url;
                createUser(email, password)
                    .then(result => {
                        const user = result.user
                        console.log(user);
                    })
                const userInfo = {
                    displayName: name, photoURL: photoURL
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(name, gender, age, hometown, relationshipStatus, photoURL)
                    })

            });


        const saveUser = (name, gender, age, hometown, relationshipStatus, photoURL) => {
            const user = {
                name: name,
                email,
                age: age,
                gender: gender,
                hometown: hometown,
                relationshipStatus: relationshipStatus,
                profilePicture: photoURL
            }

            fetch('https://know-me-server.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    setIsLoading(false)
                    toast.success("Signup successful")
                    navigate('/')
                })
        }

    };

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                const name = user.displayName;
                const email = user.email;
                const profilePicture = user.photoURL;

                saveGUser(name, email, profilePicture)
                setSignInError('');
                toast.success("User created successfully")
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.error('Error', error);
                setSignInError(error.message);
            });
    }

    const saveGUser = (name, email, profilePicture) => {
        const user = {
            name: name,
            email: email,
            profilePicture: profilePicture
        }

        fetch('https://know-me-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Login successful")
                navigate('/')
            })
    }

    if (loading) {
        return <Loading />
    }


    return (
        <div className="hero min-h-screen bg-base-200 pt-10">
            <form onSubmit={handleOnSubmit}>
                <div className={page1 ? '' : 'hidden'}>
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <Player
                                src='https://assets5.lottiefiles.com/packages/lf20_kdCeeh2u4M.json'
                                className="player"
                                loop
                                autoplay
                                style={{ height: '400px', width: '400px' }}
                            />
                        </div>
                        <div>
                            <div className="text-center lg:text-left">
                                <h1 className="text-5xl font-bold">Sign up now!</h1>
                                <p className="py-6">Sign up to create your account and share your story and connect with the people of your life</p>
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                                <div className="card-body" >
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" name="email" placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                        <label className="label">
                                            <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                        <p>
                                            Already have an account? <span className='text-primary hover:text-secondary font-medium'><Link to='/login'>Log in</Link></span>
                                        </p>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button onClick={() => setPage1(!page1)} className="btn btn-primary">Next</button>
                                    </div>
                                    <div className="divider">OR</div>
                                    <div className="form-control mt-1">
                                        <button onClick={handleGoogleLogin} className="btn bg-white text-orange-400"><FcGoogle className='text-2xl mr-2' />  Sign in with Google</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={page1 ? 'hidden' : ''}>
                    <div className="p-5 grid grid-cols-1 gap-5 md:grid-cols-2 border-2 bg-base-100 rounded-xl">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <select className="select select-bordered w-full max-w-lg"
                                name="gender"
                                required>

                                <option>Male</option>
                                <option>Female</option>
                                <option>Prefer not to say</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Age</span>
                            </label>
                            <input type="text" name="age" placeholder="age" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Hometown</span>
                            </label>
                            <input type="text" name='hometown' placeholder="hometown" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Relationship status</span>
                            </label>
                            <select className="select select-bordered w-full max-w-lg"
                                name="relationshipStatus" placeholder="relationship status"
                                required>

                                <option>Single</option>
                                <option>Engaged</option>
                                <option>Married</option>
                                <option>Complicated</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Profile picture</span>
                            </label>
                            <input type="file" name="profilePicture"
                                required
                                className="input w-full max-w-xs" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Cover photo</span>
                            </label>
                            <input type="file" name="coverPhoto"

                                className="input w-full max-w-xs" />
                        </div>
                        <div>
                            <h1 className='text-red-500'>{signInError}</h1>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={() => setPage1(!page1)} className="btn btn-primary">Previous</button>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Sign up</button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default Signup;