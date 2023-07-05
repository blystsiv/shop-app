import React from 'react';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}
export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg p-8'>
            <h2 className='text-2xl font-bold mb-4'>Confirmation Modal</h2>
            <p className='mb-6'>Are you sure you want to proceed?</p>
            <div className='flex justify-between'>
              <button onClick={onConfirm} className='bg-blue-500 text-white px-4 py-2 rounded mr-2'>
                Confirm
              </button>
              <button onClick={onClose} className='bg-gray-500 text-white px-4 py-2 rounded'>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
