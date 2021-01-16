import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className='flex justify-between px-4 py-6 bg-gray-900 text-white'>
        <div>
          <img
            src={require('assets/img/logo.png')}
            className='h-16'
            alt='Logo'
          />
          <div className='mt-3 flex justify-around'>
            <a
              href='https://github.com/thecoding-time/codeINN'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='h-6 m-auto mb-1 w-auto flex-shrink-1'
                alt='Star'
                src={require('assets/img/10.png')}
              />
              Star us on GitHub
            </a>
            <a href='mailto:thecodingtime@gmail.com'>
              <img
                className='h-6 m-auto mb-1 w-auto flex-shrink-1'
                alt='Email'
                src='https://img.icons8.com/fluent/48/000000/gmail.png'
              />
              Email us
            </a>
          </div>
        </div>
      </div>
      <div className='text-center bg-gray-800 p-2' style={{ height: 40 }}>
        <p className='text-gray-200 text-center'>
          MIT License © Copyright 2021 Shaan Jain
        </p>
      </div>
    </>
  );
}

export default Footer;
