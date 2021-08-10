import React from 'react';

const Footer = () => {
  return (
    <div className='mt-24 '>
      <div className='bg-gray-100 flex justify-evenly '>
        <di></di>
        <div className='mt-12 mb-12'>
          <h1 className='text-xl mb-6 font-bold'>Projects</h1>
          <ul>
            <li>Oil & Gas</li>
            <li>Community Development</li>
            <li>Renewable Energy</li>
            <li>Industry Infrastructure</li>
            <li>Institutional Support & Capacity Building</li>
            <li>Tourism & Resources Management Waste Management</li>
          </ul>
        </div>
        <div className='mt-12 mb-12 '>
          <h1 className='text-xl mb-6 font-bold'>Services</h1>
          <ul>
            <li>Oil & Gas</li>
            <li>Community Development</li>
            <li>Renewable Energy</li>
            <li>Industry Infrastructure</li>
            <li>Institutional Support & Capacity Building</li>
            <li>Tourism & Resources Management Waste Management</li>
          </ul>
        </div>
        <div className='mt-12 mb-12 '>
          <h1 className='text-xl mb-6 font-bold'>Get in Touch</h1>
          <div className='flex justify-evenly'>
            <div>
              <svg
                width='43'
                height='35'
                viewBox='0 0 43 35'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M38.0385 0H4.96154C2.15129 0 0 2.5293 0 5.83333V29.1667C0 32.4707 2.15129 35 4.96154 35H38.0385C40.8487 35 43 32.4707 43 29.1667V5.83333C43 2.5293 40.8487 0 38.0385 0ZM39.3628 29.9414L26.4615 19.0571L21.5 22.946L16.3705 19.0571L3.63717 29.9414L14.0577 17.3025L1.32437 5.63585L21.5 18.4722L41.5141 5.83333L28.9423 17.5L39.3628 29.9414Z'
                  fill='#6BBE52'
                />
              </svg>
            </div>
            <div>
              <svg
                width='34'
                height='35'
                viewBox='0 0 34 35'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M30.6 0H3.4C1.52734 0 0 1.57227 0 3.5V31.5C0 33.4277 1.52734 35 3.4 35H30.6C32.4727 35 34 33.4277 34 31.5V3.5C34 1.57227 32.4727 0 30.6 0ZM10.3727 28H5.1V12.9473H10.3727V28ZM7.65 11.1973C6.12266 11.1973 5.1 10.1514 5.1 8.75C5.1 7.34863 6.12266 6.30273 7.82266 6.30273C9.35 6.30273 10.3727 7.34863 10.3727 8.75C10.3727 10.1514 9.35 11.1973 7.65 11.1973ZM28.9 28H23.6273V19.7764C23.6273 17.5 22.2727 16.9736 21.7613 16.9736C21.25 16.9736 19.55 17.3223 19.55 19.7764C19.55 20.125 19.55 28 19.55 28H14.2773V12.9473H19.55V15.0527C20.2273 13.8223 21.5887 12.9473 24.1387 12.9473C26.6887 12.9473 28.7273 15.0527 28.7273 19.7764V28H28.9Z'
                  fill='#6BBE52'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className='bg-green-300 text-center py-2'>
        &copy; Green Environmental Consultants
      </p>
    </div>
  );
};

export default Footer;
