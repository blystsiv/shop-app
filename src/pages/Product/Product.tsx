import { Header } from '../../components/Header';

export const Product = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Header />
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <img
            src='https://assets.stickpng.com/images/61d2f93392b57c0004c64747.png'
            alt='iPhone 12'
            className='object-contain'
          />
          <div className='md:col-span-1'>
            <div className='bg-white rounded-lg shadow p-8'>
              <h2 className='text-3xl font-semibold mb-4'>iPhone 12</h2>
              <div className='grid grid-cols-2 gap-4 mb-4'>
                <div className='text-gray-500'>Count:</div>
                <div>5</div>
                <div className='text-gray-500'>Size:</div>
                <div>146.7mm x 71.5mm</div>
                <div className='text-gray-500'>Weight:</div>
                <div>164g</div>
              </div>
              <div className='flex justify-between'>
                <button className='px-4 py-2 bg-red-500 text-white rounded mr-2' onClick={() => {}}>
                  Remove
                </button>
                <button className='px-4 py-2 bg-blue-500 text-white rounded' onClick={() => {}}>
                  Edit
                </button>
              </div>
            </div>

            <div className='mt-8'>
              <h3 className='text-2xl font-semibold mb-4'>Add a Comment</h3>
              <textarea
                className='w-full border rounded p-4 h-48'
                placeholder='Enter your comment...'
                value=''
              ></textarea>
              <button className='px-4 py-2 bg-blue-500 text-white rounded mt-2'>Add Comment</button>
            </div>
          </div>
        </div>

        {/* COMPONENT */}
        <div className='mt-8'>
          <h2 className='text-2xl font-semibold mb-4'>Comments</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {/* COMPONENT */}
            {[1, 2, 3, 4].map(() => (
              <div key={1} className='bg-white rounded-lg shadow p-4 mb-4'>
                <p>Great phone!</p>
                <p className='text-gray-500 mt-2'>16:41 22.03.2023</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
