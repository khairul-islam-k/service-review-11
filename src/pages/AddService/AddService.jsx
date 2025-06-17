import React from 'react';
import UseAuth from '../auth/UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddService = () => {
  const { user } = UseAuth();
  const date = user?.reloadUserInfo?.lastRefreshAt;
  const newDate = date?.split('T');

  const handleService = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const service = Object.fromEntries(formData.entries());

    axios.post('http://localhost:3000/services', service)
      .then(res => {
        e.target.reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Service added successfully",
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(error => console.log(error))

  }
  return (
    <div className='p-6 lg:p-24'>
      <div className='lg:p-12 p-5 text-end'>
        <h1 className='text-6xl'>Add Service</h1>
        <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
      </div>

      <div className='bg-[#f1e2e2] lg:py-10 py-7 rounded-xl'>
        <form onSubmit={handleService}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6'>
            <fieldset className="fieldset rounded-box p-4">
              <label className="label">Service Title</label>
              <input type="text" className="input w-full" name='service_title' placeholder="Service Title" />
            </fieldset>


            <fieldset className="fieldset rounded-box p-4">
              <label className="label">Company Name</label>
              <input type="text" name='company_name' className="input w-full" placeholder="Company Name" />
            </fieldset>


            <fieldset className="fieldset rounded-box p-4">
              <label className="label">Website</label>
              <input type="url" name='website' className="input w-full" placeholder="Website" />
            </fieldset>


            <fieldset className="fieldset rounded-box p-4">
              <label className="label">Category</label>
              <select name='category' className="select w-full">
                <option disabled={true}>select</option>
                <option value='food'>Food</option>
                <option value='transport'>Transport</option>
                <option value='IT'>IT</option>
              </select>
            </fieldset>


            <fieldset className="fieldset rounded-box p-4">
              <label className="label">Price</label>
              <input type="text" name='price' className="input w-full" placeholder="Enter service price" />
            </fieldset>


            <fieldset className="fieldset rounded-box p-4">
              <label className="label">Photo</label>
              <input type="text" name='service_image' className="input w-full" placeholder="Enter photo URL" />
            </fieldset>

            <fieldset className="fieldset rounded-box p-4">
              <label className="label">Email</label>
              <input type="email" name='user_email' className="input w-full" placeholder="User Email" defaultValue={user?.email} readOnly />
            </fieldset>

            <fieldset className="fieldset rounded-box p-4">
              <label className="label">Added Date</label>
              <input type="date" name='added_date' className="input w-full" placeholder="Added date" defaultValue={newDate[0]} readOnly />
            </fieldset>



          </div>

          <fieldset className="fieldset rounded-box p-4 md:my-6 my-2">
            <label className="label">service description</label>
            <textarea className='border w-full bg-[#ffffff]' name="description" id="text" rows="5"></textarea>
          </fieldset>

          <div className='px-4'>
            <input className='btn w-full' type="submit" value="Add service" />
          </div>
        </form>
      </div>

    </div>
  );
};

export default AddService;