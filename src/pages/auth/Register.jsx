import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl lg:pt-12 pt-7">
            <h3 className='text-2xl font-bold text-center'>Register your account</h3>
      <div className="card-body">
        <form className="fieldset">

          <label className="label">Your Name</label>
          <input name='name' type="text" className="input" placeholder="Enter Your Name" required />
          {/* {
            nameError && <p className='text-red-500'>{nameError}</p>
          } */}

          
          <label className="label">Photo URL</label>
          <input name='url' type="text" className="input" placeholder="Enter Photo URL" />

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