import React from 'react';
import { Link } from 'react-router-dom';

import Icon from 'components/Icon';

function AddMkdSnip() {
  return (
    <div className='my-1 px-2 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4'>
      <Link to='/mkd/new'>
        <article className='overflow-hidden rounded-lg shadow-lg bg-gray-900 mx-auto'>
          <div className='flex justify-center'>
            <Icon name='code' style={{ fill: '#b7b7b7' }} />
          </div>

          <header className='flex items-center justify-center leading-tight p-2 md:p-4 bg-gray-100'>
            <h1 className='text-lg text-center'>
              <p className='no-underline hover:underline text-gray-900 font-bold text-center'>
                Add New Markdown
              </p>
            </h1>
          </header>
        </article>
      </Link>
    </div>
  );
}

export default AddMkdSnip;
