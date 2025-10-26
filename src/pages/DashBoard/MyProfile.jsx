import React, { useState } from "react";
import UseAuth from "../auth/UseAuth";
import Swal from "sweetalert2";


const MyProfile = () => {
    const { user, updateUser } = UseAuth();
    const [openModal, setOpenModal] = useState(true);
    const handleSubmit = (e) => {
        e.preventDefault();
        const displayName = e.target.name.value;
        const photoURL = e.target.photo.value;
        const payload = { displayName, photoURL };
        updateUser(payload)
            .then(() => {
                setOpenModal(true)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Update successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }).catch((error) => {
                console.log('ree', error);
            })
    }

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center p-6">
            {
                openModal ? <div className="bg-base-100 shadow-xl rounded-2xl p-6 w-full max-w-sm text-center">
                    {/* Profile Photo */}
                    <div className="avatar mb-4">
                        <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
                            <img src={user?.photoURL} alt="Profile" />
                        </div>
                    </div>

                    {/* Name */}
                    <h2 className="text-xl font-bold text-primary mb-1">{user?.displayName}</h2>

                    {/* Email */}
                    <p className="text-gray-500">{user?.email}</p>

                    {/* Optional Edit Button */}
                    <button
                        onClick={() => setOpenModal(false)}
                        className="btn btn-outline btn-primary mt-4 w-full">
                        Edit Profile
                    </button>
                </div> :

                    //   edit
                    <div className="bg-base-100 shadow-xl rounded-2xl p-6 w-full max-w-sm">
                        <h2 className="text-xl font-bold text-center text-primary mb-4">
                            ✏️ Edit Profile
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name Field */}
                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold">Full Name</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={user?.displayName}
                                    name='name'
                                    placeholder="Enter your name"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            {/* Photo URL Field */}
                            <div>
                                <label className="label">
                                    <span className="label-text font-semibold">Photo URL</span>
                                </label>
                                <input
                                    type="url"
                                    defaultValue={user?.photoURL}
                                    name='photo'
                                    placeholder="Enter photo URL"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-between gap-3 pt-2">
                                <button
                                    onClick={() => setOpenModal(true)}
                                    type="button"
                                    className="btn btn-outline btn-error flex-1"
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary flex-1">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
            }


        </div>
    );
};

export default MyProfile;
