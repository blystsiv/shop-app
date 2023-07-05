import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';

export const NotFound = () => {
  return (
    <>
      <Header />
      <div className='min-h-90vh flex items-center justify-center'>
        <div className='container mx-auto'>
          <div className='flex items-center justify-center'>
            <div className='text-center'>
              <h1 className='text-4xl font-bold mb-4'>404</h1>
              <p className='text-lg mb-4'>Page Not Found</p>
              <p className='mb-4'>The page you are looking for does not exist.</p>
              <Link to='/' className='text-blue-500 hover:underline'>
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
