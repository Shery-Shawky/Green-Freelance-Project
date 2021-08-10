import React from 'react';
import img_1 from '../assets/clients/1.PNG';
import img_2 from '../assets/clients/2.PNG';
import img_3 from '../assets/clients/3.PNG';
import img_4 from '../assets/clients/4.PNG';
import img_5 from '../assets/clients/5.PNG';
const Clients = () => {
  return (
    <div className='mt-24 mb-12'>
      <h1 className='  mb-12 font-bold text-center text-2xl'>Our Clients</h1>
      <div className='flex justify-evenly bg-white-100 mx-auto  '>
        <img src={img_1} alt='' className='w-52 h-32 opacity-50 ' />
        <img src={img_2} alt='' className='w-52 h-32 opacity-50 ' />
        <img src={img_3} alt='' className='w-52 h-32 opacity-50 ' />
        <img src={img_4} alt='' className='w-52 h-32 opacity-50 ' />
        <img src={img_5} alt='' className='w-52 h-32 opacity-50 ' />
      </div>
    </div>
  );
};

export default Clients;
