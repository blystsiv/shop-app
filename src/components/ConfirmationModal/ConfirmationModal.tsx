export const ConfirmationModal = ({}) => {
  return (
    <>
      <div className='fixed inset-0 flex items-center justify-center z-50'>
        <div className='fixed inset-0 bg-gray-700 opacity-50' onClick={() => {}}></div>
        <div className='bg-white rounded-lg p-8 relative'>
          <h2 className='text-2xl font-bold mb-4'>Are you sure you want to proceed?</h2>
          <p className='mb-6'>This action cannot be undone.</p>
          <div className='flex justify-between'>
            <button onClick={() => {}} className='bg-blue-500 text-white px-4 py-2 rounded mr-2'>
              Confirm
            </button>
            <button onClick={() => {}} className='bg-gray-500 text-white px-4 py-2 rounded'>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
