export const Product = () => {
  return (
    <div className='bg-white rounded-lg shadow hover:shadow-lg p-4 cursor-pointer'>
      <div className='flex justify-center items-center h-64 overflow-hidden rounded-t-lg mb-4'>
        <img
          src='https://i.allo.ua/media/catalog/product/cache/1/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/g/o/google_pixel_5_just_black_1_1.jpg'
          alt='IPhone 12 Pro'
          className='h-full object-fit'
        />
      </div>
      <div className='p-4'>
        <h2 className='text-lg font-semibold mb-2'>Google Pixel 5</h2>
        <p className='text-gray-500 mb-2'>Count: 5</p>
        <p className='text-gray-500 mb-4'>Weight: 146.7</p>
        <div className='flex justify-between'>
          <button className='px-4 py-2 bg-red-500 text-white rounded' onClick={() => {}}>
            Remove
          </button>
          <button className='px-4 py-2 bg-blue-500 text-white rounded'>Edit</button>
        </div>
      </div>
    </div>
  );
};
