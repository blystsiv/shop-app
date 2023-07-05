import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Product } from './pages/Product';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Home />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
