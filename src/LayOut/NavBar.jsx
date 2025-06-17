import React from 'react';
import { Link, NavLink } from 'react-router';
import UseAuth from '../pages/auth/UseAuth';
import './NavBar.css';
import Swal from 'sweetalert2';
import logo from '../assets/logo.png'

const NavBar = () => {
  const { user, logOutUser } = UseAuth();

  const handleLogOut = () => {
    logOutUser()
      .then(result => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "SignOut has been successfully",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .then(error => {
        //error
      })
  }
  const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/services'>Services</NavLink></li>
    {
      user && <>
        <li><NavLink to='/addService'>Add Service</NavLink></li>
        <li><NavLink to='/myServices'>MY Services</NavLink></li>
        <li><NavLink to='/myReviews'>My Reviews</NavLink></li>
      </>
    }
  </>
  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <div className='flex items-center gap-4'>
          <img className='rounded-lg' src={logo} alt="" />
          <h3 className='text-3xl font-bold lg:block hidden'>Service Review</h3>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <div>
          {
            user?.photoURL && <img className='w-[41px] h-[41px] rounded-full' src={user?.photoURL} alt="" />
          }
        </div>
        
        <div>
          {
            user ? <button onClick={handleLogOut} className="btn btn-neutral">LogOut</button> : <>
              <Link to='/auth/register'><button className="btn btn-primary mr-1 lg:mr-4">Signup</button></Link>
              <Link to='/auth/login'><button className="btn btn-neutral">Signin</button></Link>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default NavBar;