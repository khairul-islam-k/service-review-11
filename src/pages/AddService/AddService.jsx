import React from 'react';

const AddService = () => {
  const handleService = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const service = Object.fromEntries(formData.entries());

    console.log(service);
    
    fetch('http://localhost:3000/services',{
      method:'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(service)
    }).then(res => res.json())
    .then(data => console.log(data))
  }
    return (
        <div className='p-6 lg:p-24'>
            <div className='lg:p-12 p-5 text-end'>
                <h1 className='text-6xl'>Add coffee</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleService}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                     <label className="label">Name</label>
                     <input type="text" className="input w-full" name='name' placeholder="Enter coffee name" />
                   </fieldset>

                    
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                     <label className="label">Quantity</label>
                     <input type="text" name='quantity' className="input w-full" placeholder="Enter coffee quantity" />
                   </fieldset>

                    
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                     <label className="label">Supplier</label>
                     <input type="text" name='supplier' className="input w-full" placeholder="Enter coffee supplier" />
                   </fieldset>

                    
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                     <label className="label">Taste</label>
                     <input type="text" name='taste' className="input w-full" placeholder="Enter coffee taste" />
                   </fieldset>

                    
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                     <label className="label">Price</label>
                     <input type="text" name='price' className="input w-full" placeholder="Enter coffee price" />
                   </fieldset>

                    
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                     <label className="label">Details</label>
                     <input type="text" name='details' className="input w-full" placeholder="Enter coffee details" />
                   </fieldset>

                    

                </div>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 md:my-6 my-2">
                     <label className="label">Photo</label>
                     <input type="text" name='photo' className="input w-full" placeholder="Enter photo URL" />
                   </fieldset>

                   <input className='btn w-full' type="submit" value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddService;