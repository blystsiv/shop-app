import { Product } from '../Product/Product';

export const ProductList = () => {
  return (
    <div className='container mx-auto py-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {[1, 2, 3, 4, 5, 6, 7].map(() => (
          <Product />
        ))}
      </div>
    </div>
  );
};
