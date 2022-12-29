import React from 'react';
import { toast } from 'react-hot-toast';

const EditModal = ({ userInfo }) => {

    const imageHostKey = process.env.REACT_APP_imagebb_key
    const handleOnSubmit = event => {
        console.log("Clicked");
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const gender = form.gender.value;
        const age = form.age.value;
        const hometown = form.hometown.value;
        const relationshipStatus = form.relationshipStatus.value;
        const education = form.education.value;
        const profilePicture = form.profilePicture.files[0];
        const formData = new FormData();
        formData.append('image', profilePicture);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

        if (profilePicture) {
            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(imageData => {
                    const photoURL = imageData.data.url;
                    console.log(photoURL);
                    const user = {
                        name: name,
                        email: email,
                        age: age,
                        gender: gender,
                        education: education,
                        hometown: hometown,
                        relationshipStatus: relationshipStatus,
                        profilePicture: photoURL
                    }
                    fetch(`http://localhost:5000/users?email=${userInfo.email}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast.success("Profile updated successfully")
                            window.location.reload()
                        })

                });
        }
        else {
            const profilePicture = userInfo.profilePicture
            const user = {
                name: name,
                email: email,
                age: age,
                gender: gender,
                education: education,
                hometown: hometown,
                relationshipStatus: relationshipStatus,
                profilePicture: profilePicture
            }
            fetch(`http://localhost:5000/users?email=${userInfo.email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    toast.success("Profile updated successfully")
                    window.location.reload()
                })
        }
    };


    return (
        <div>
            {/* The button to open modal */}
            {/* <label htmlFor="my-modal-5" className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-2/4 max-w-5xl">
                    <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleOnSubmit} action="">
                        <div>
                            <h1>Upload profile picture</h1>
                            <input type="file" name='profilePicture' className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" defaultValue={userInfo.name} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" disabled defaultValue={userInfo.email} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <select className="select select-bordered w-full max-w-lg"
                                name="gender"
                                defaultValue={userInfo.gender}
                                disabled>
                                <option>{userInfo.gender}</option>
                                <option>Female</option>
                                <option>Prefer not to say</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Age</span>
                            </label>
                            <input type="text" name="age" placeholder="age" defaultValue={userInfo.age} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Hometown</span>
                            </label>
                            <input type="text" name='hometown' placeholder="hometown" defaultValue={userInfo.hometown} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Education</span>
                            </label>
                            <input type="text" name='education' defaultValue={userInfo.education} placeholder="add school/college" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Relationship status</span>
                            </label>
                            <select className="select select-bordered w-full max-w-lg"
                                name="relationshipStatus" placeholder="relationship status" defaultValue={userInfo.relationshipStatus}
                                required>

                                <option>Single</option>
                                <option>Engaged</option>
                                <option>Married</option>
                                <option>Complicated</option>
                            </select>
                        </div>
                        <div>
                            <button type='submit' className="btn btn-primary mt-2">Update</button>
                        </div>

                        <div className="modal-action">
                            <label htmlFor="my-modal-5" className="btn btn-error">Close</label>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditModal;