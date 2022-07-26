import React from 'react';

function Body() {
  return (
    <div className='flex flex-col-reverse md:grid grid-cols-2'>
      <div className='flex justify-around md:flex-col md:justify-between'>
        <ul className='text-gray-600'>
          <li className='mb-2 hover:text-blue-500 hover:underline'>
            <a href='#'>Programming</a>
          </li>
          <li className='mb-2 hover:text-blue-500 hover:underline'>
            <a href='#'>Education</a>
          </li>
          <li className='mb-2 hover:text-blue-500 hover:underline'>
            <a href='#'>Hobby</a>
          </li>
          <li className='mb-2 hover:text-blue-500 hover:underline'>
            <a href='#'>Personal life</a>
          </li>
          <li className='mb-2 hover:text-blue-500 hover:underline'>
            <a href='#'>Spritual life</a>
          </li>
        </ul>
        <img src='/images/logo.jpg' className='w-32 h-32 object-cover' alt='' />
      </div>
      <div>
        <div className='container shadow p-8 w-fit mb-8 hover:cursor-pointer hover:bg-gray-50'>
          <div className='border-b-2'>
            <h3 className='text-4xl mb-3'>Getting started with React.js</h3>
          </div>
          <div className='max-w-md'>
            <span>
              I would love to expantiate more on my journey with using React.js
              and how I got to discover the nitty-gritty of the library which
              was build on top of javaScript, being one of the dreaded language
              by professionals.
            </span>
            <p className='mt-3'>
              <a href='#' className='hover:text-blue-300'>
                Read more...
              </a>
            </p>
          </div>
        </div>
        <div className='container shadow p-8 w-fit mb-8 hover:cursor-pointer hover:bg-gray-50'>
          <div className='border-b-2'>
            <h3 className='text-4xl mb-3'>Jumping into the Blockchain Space</h3>
          </div>
          <div className='max-w-md'>
            <span>
              I quite unfortunate that the web3 is slowly displacing the web2
              which is vivid, and it is doing so from the standpoint of trust in
              our data. Which is no longer safe when being handles by companies
              like Facebook, Google and Microsoft
            </span>
            <p className='mt-3'>
              <a href='#' className='hover:text-blue-300'>
                Read more...
              </a>
            </p>
          </div>
        </div>
        <div className='container shadow p-8 w-fit mb-8 hover:cursor-pointer hover:bg-gray-50'>
          <div className='border-b-2'>
            <h3 className='text-4xl mb-3'>Getting started with React.js</h3>
          </div>
          <div className='max-w-md'>
            <span>
              I would love to expantiate more on my journey with using React.js
              and how I got to discover the nitty-gritty of the library which
              was build on top of javaScript, being one of the dreaded language
              by professionals.
            </span>
            <p className='mt-3'>
              <a href='#' className='hover:text-blue-300'>
                Read more...
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
