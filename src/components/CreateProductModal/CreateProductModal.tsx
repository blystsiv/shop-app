export const CreateProductModal = ({}) => {
  return (
    <>
      <div className='fixed inset-0 flex items-center justify-center z-50'>
        <div className='fixed inset-0 bg-gray-700 opacity-50' onClick={() => {}}></div>
        <div className='bg-white rounded-lg p-6 relative max-w-md'>
          <h2 className='text-2xl font-bold mb-4'>Create Product</h2>
          <div className='mb-4'>
            <label className='block text-gray-700 font-semibold mb-2' htmlFor='name'>
              Name:
            </label>
            <input type='text' id='name' className='border rounded w-full py-2 px-3' required />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-semibold mb-2' htmlFor='imageUrl'>
              Image URL:
            </label>
            <input type='text' id='imageUrl' className='border rounded w-full py-2 px-3' required />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-semibold mb-2' htmlFor='count'>
              Count:
            </label>
            <input type='number' id='count' className='border rounded w-full py-2 px-3' required />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-semibold mb-2' htmlFor='size'>
              Size:
            </label>
            <div className='flex'>
              <input
                type='number'
                id='width'
                className='border rounded w-1/2 py-2 px-3 mr-2'
                required
              />
              <input
                type='number'
                id='height'
                className='border rounded w-1/2 py-2 px-3'
                required
              />
            </div>
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-semibold mb-2' htmlFor='weight'>
              Weight:
            </label>
            <input type='text' id='weight' className='border rounded w-full py-2 px-3' required />
          </div>
          <div className='flex justify-end'>
            <button onClick={() => {}} className='bg-blue-500 text-white px-4 py-2 rounded'>
              Save
            </button>
            <button onClick={() => {}} className='bg-gray-500 text-white px-4 py-2 rounded ml-2'>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
