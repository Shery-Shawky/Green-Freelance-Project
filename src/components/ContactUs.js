import React from 'react';
import image from '../assets/contactus.PNG';
const ContactUs = () => {
  return (
    <div>
      <h1 className=' mt-12 mb-12 font-bold text-center text-2xl'>
        Contact Us
      </h1>
      <div className='grid md:grid-cols-2 grid-cols-1 mb-12 gap-0 '>
        <div className='w-5/6  bg-white rounded shadow-xl p-8  md:ml-auto md:mx-0 mx-auto'>
          <form>
            <div className='flex flex-col mb-4'>
              <label className='mb-2  text-lg text-gray-900' for='first_name'>
                Name
              </label>
              <input
                className='border  rounded-lg py-2 px-3 text-grey-500'
                type='text'
                name='first_name'
                id='first_name'
              />
            </div>

            <div className='flex flex-col mb-4'>
              <label className='mb-2  text-lg text-gray-900' for='email'>
                Email
              </label>
              <input
                className='border rounded-lg py-2 px-3 text-grey-500'
                type='email'
                name='email'
                id='email'
              />
            </div>
            <div className='flex flex-col mb-4'>
              <label className='mb-2 text-lg text-gray-500' for='phone'>
                Phone
              </label>
              <input
                className='border  rounded-lg py-2 px-3 text-grey-800'
                type='text'
                name='phone'
                id='phone'
              />
            </div>
            <div className='flex flex-col mb-4'>
              <label className='mb-2 text-lg text-gray-500' for='message'>
                Message
              </label>
              <textarea
                className='border  rounded-lg py-2 px-3 text-grey-800'
                name='message'
                id='message'
                rows='5'
              />
            </div>
            <button
              className='block  text-white  text-lg mx-auto  rounded-full bg-green-300 px-8 py-2'
              type='submit'
            >
              Send
            </button>
          </form>
        </div>
        <div className='w-5/6 hidden md:block '>
          <img src={image} alt='' className='w-full h-screen object-fit' />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
