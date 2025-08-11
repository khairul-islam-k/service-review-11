import React from 'react';
import { Link, useNavigate } from 'react-router';
import UseAuth from './UseAuth';
import Swal from 'sweetalert2';

const Login = () => {
  const Navigate = useNavigate();
  const { logInUser,googleLogin } = UseAuth();

  const handlegoogleLogin = () => {
    googleLogin()
    .then(result => {
      //result
      Navigate('/');
      Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your login has been successful",
            showConfirmButton: false,
            timer: 1500
          });
    })
    .catch(e=> {
      //e
    })
  }

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
          <input defaultValue="nurnabi@gmail.com" name='email' type="email" className="input" placeholder="Email" required />
          <label className="label">Password</label>
          <input defaultValue="Khairul37" name='password' type="password" className="input" placeholder="Password" required />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        {/* google login */}
        <button onClick={handlegoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
          <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
          Login with Google
        </button>

        <p className='font-semibold text-center'>Dont’t Have An Account ? <Link className='text-secondary' to='/auth/register'>Register</Link></p>
        

      </div>
    </div>
  );
};

export default Login;