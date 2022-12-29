import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../Assets/login.png'
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from '../../Context/AuthProvider';
import logo from '../../Assets/logo white.png'
import { GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-hot-toast';

const Login = () => {

    const { signIn, providerLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const [signInError, setSignInError] = useState("")
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    const handleOnSubmit = event => {
        setSignInError("")
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
                setSignInError(error.message);
            });

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

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                toast.success("User created successfully")
                navigate('/')
            })
    }


    return (

        <div>
            <div className="bg-base-200 flex justify-center">
                <img src={logo} alt="" className='h-[250px] w-[300px]' />
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={loginImg} alt="social connect" className='h-96 w-80' />
                    </div>
                    <div>
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">Login to access your account. Connect with and share your life with people of your life</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleOnSubmit}>
                                <div className="card-body">
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
                                            <span className="label-text text-error">{signInError}</span>
                                        </label>
                                        <label className="label">
                                            <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                        <p>
                                            Don't have an account? <span className='text-primary hover:text-secondary font-medium'><Link to='/signup'>Sign up</Link></span>
                                        </p>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button type='submit' className="btn btn-primary">Login</button>
                                    </div>
                                    <div className="divider">OR</div>
                                    <div className="form-control mt-1">
                                        <button onClick={handleGoogleLogin} className="btn bg-white text-orange-400"><FcGoogle className='text-2xl mr-2' />  Sign in with Google</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;