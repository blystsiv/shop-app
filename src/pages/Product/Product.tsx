import { useState } from 'react';
import { Header } from '../../components/Header';

export const Product = () => {
  const [product, setProduct] = useState({
    id: 1,
    imageUrl:
      'https://yabloki.ua/media/cache/resolve/app_product_page_small_slider_image/9b/fc/d04d578c1be08b93360667e4ed0f.png',
    name: 'iPhone 12',
    count: 5,
    size: {
      width: 146.7,
      height: 71.5,
    },
    weight: '164g',
    comments: [
      {
        id: 1,
        productId: 1,
        description: 'Great phone!',
        date: '14:00 22.08.2022',
      },
      {
        id: 2,
        productId: 1,
        description: 'Love the camera quality.',
        date: '16:41 22.03.2023',
      },
      {
        id: 3,
        productId: 1,
        description: 'Love the camera qua lityqu alityqua lity qual ity quality.',
        date: '16:41 22.03.2023',
      },
      {
        id: 4,
        productId: 1,
        description: 'Love the camera qua lityqu alityqua lity qual ity quality.',
        date: '16:41 22.03.2023',
      },
    ],
  });

  return (
    <div className='bg-gray-100 min-h-screen'>
      <Header />
      <div className='container mx-auto px-4 py-8'>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <img src={product.imageUrl} alt={product.name} className='object-contain min-h-96 ' />
          <div className='md:col-span-1'>
            <div className='bg-white rounded-lg shadow p-8'>
              <h2 className='text-3xl font-semibold mb-4'>{product.name}</h2>
              <div className='grid grid-cols-2 gap-4 mb-4'>
                <div className='text-gray-500'>Count:</div>
                <div>{product.count}</div>
                <div className='text-gray-500'>Size:</div>
                <div>
                  {product.size.width}mm x {product.size.height}mm
                </div>
                <div className='text-gray-500'>Weight:</div>
                <div>{product.weight}</div>
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
            {product.comments.map((comment) => (
              <div key={comment.id} className='bg-white rounded-lg shadow p-4 mb-4'>
                <p>{comment.description}</p>
                <p className='text-gray-500 mt-2'>{comment.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
