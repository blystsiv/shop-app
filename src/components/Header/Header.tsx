import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='bg-gray-800 py-4'>
      <div className='container mx-auto flex items-center justify-between'>
        <h1 className='text-2xl font-bold text-white'>
          <Link to='/' className='text-white hover:text-gray-300'>
            Product List App
          </Link>
        </h1>
        <div className='flex space-x-4'>
          <a
            href='https://www.linkedin.com/in/blystsiv'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white hover:text-gray-300'
          >
            LinkedIn
          </a>
          <a
            href='mailto:ostap.blystsiv@mail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white hover:text-gray-300'
          >
            Mail
          </a>
          <a
            href='https://github.com/blystsiv'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white hover:text-gray-300'
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
};
