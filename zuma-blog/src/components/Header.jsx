import React from 'react';

function Header() {
  return (
    <div className='md:flex justify-center sticky top-0 bg-white'>
      <div className='flex items-center justify-start'>
        <img
          src='/images/logo2.jpg'
          className='w-28 h-28 object-cover'
          alt=''
        />
        <div className='flex flex-col'>
          <span className='text-3xl  md:text-5xl md:text-gray-500'>
            Zuma Blog
          </span>
          <span className='text-gray-500'>
            Be the change you want to see in the world
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
