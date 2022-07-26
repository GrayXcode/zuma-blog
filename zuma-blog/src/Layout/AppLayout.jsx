import React from 'react';

function AppLayout({ children }) {
  return (
    <>
      <div className='max-w-3xl min-h-screen mx-auto '>{children}</div>
    </>
  );
}

export default AppLayout;
