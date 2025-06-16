import React from 'react';
import { Link } from 'react-router';
import UseAuth from './UseAuth';
import Swal from 'sweetalert2';

const Register = () => {
  const { createUser } = UseAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.url.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const passwordRgx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if (!passwordRgx.test(password)) {
      //alert('Password must have one lowercase one uppercase one digit and 6 characters or longer');

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must have one lowercase one uppercase one digit and 6 characters or longer",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
      return;
    }

    createUser(email, password)
      .then(result => {
        if (result) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Registration has been successful",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
      .catch(error => {
        console.log(error);
      })
    console.log('submit', name, photo, email, password);
  }

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl lg:pt-12 pt-7">
      <h3 className='text-2xl font-bold text-center'>Register your account</h3>
      <div className="card-body">
        <form onSubmit={handleRegister} className="fieldset">

          <label className="label">Your Name</label>
          <input name='name' type="text" className="input" placeholder="Enter Your Name" required />
          {/* {
            nameError && <p className='text-red-500'>{nameError}</p>
          } */}


          <label className="label">Photo URL</label>
          <input name='url' type="url" className="input" placeholder="Enter Photo URL" />

          {/* email */}
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" required />

          {/* password */}
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" required />

          <button type='submit' className="btn btn-neutral mt-4">Register</button>
        </form>
        <p className='font-semibold text-center'>Already Have an Account ? <Link className='text-secondary' to='/auth/login'>LogIn</Link></p>
      </div>
    </div>
  );
};

export default Register;