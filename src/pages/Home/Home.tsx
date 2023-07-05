import { CreateProductModal } from '../../components/CreateProductModal';
import { Header } from '../../components/Header';
import { ProductList } from '../../components/ProductList';

export const Home = () => {
  return (
    <div className='bg-gray-100'>
      <Header />
      <CreateProductModal />
      <ProductList />
    </div>
  );
};
