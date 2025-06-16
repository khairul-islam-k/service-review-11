import React from 'react';
import { Link, useNavigate } from 'react-router';
import UseAuth from './UseAuth';
import Swal from 'sweetalert2';

const Login = () => {
  const Navigate = useNavigate();
  const { logInUser } = UseAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logInUser(email, password)
      .then(result => {
        if (result) {
          Navigate('/');
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your login has been successful",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
      .catch(error => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email or Password is wrong",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      })
  }
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl lg:pt-12 pt-7">
      <h3 className='text-2xl font-bold text-center'>Login your account</h3>
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" required />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" required />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p className='font-semibold text-center'>Dont’t Have An Account ? <Link className='text-secondary' to='/auth/register'>Register</Link></p>
        {/* {
          error && <p className='text-center text-red-500'>{error}</p>
        } */}
      </div>
    </div>
  );
};

export default Login;