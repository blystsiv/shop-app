import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createProduct, deleteProduct, editProduct, fetchProducts } from '../../api';
import IProduct from '../../types/product';
import { AppDispatch, RootState, store } from '../store';

interface ProductsState {
  products: IProduct[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setProducts, setLoading, setError } = productsSlice.actions;

export const selectProducts = (state: RootState) => state.products.products;
export const selectLoading = (state: RootState) => state.products.loading;
export const selectError = (state: RootState) => state.products.error;

export const fetchProductsAsync = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const products = await fetchProducts();
      dispatch(setProducts(products));
    } catch (error) {
      dispatch(setError('Failed to fetch products'));
    }
  };
};

export const addProductAsync = (product: IProduct) => {
  return async (dispatch: AppDispatch) => {
    try {
      const newProduct = await createProduct(product);
      dispatch(setProducts([...selectProducts(store.getState()), newProduct]));
    } catch (error) {
      dispatch(setError('Failed to add product'));
    }
  };
};

export const removeProductAsync = (productId: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      await deleteProduct(productId);
      const updatedProducts = selectProducts(store.getState()).filter(
        (product) => product.id !== productId,
      );
      dispatch(setProducts(updatedProducts));
    } catch (error) {
      dispatch(setError('Failed to remove product'));
    }
  };
};

export const editProductAsync = (product: IProduct) => {
  return async (dispatch: AppDispatch) => {
    try {
      await editProduct(product);
      const updatedProducts = selectProducts(store.getState()).map((p) =>
        p.id === product.id ? product : p,
      );
      dispatch(setProducts(updatedProducts));
    } catch (error) {
      dispatch(setError('Failed to edit product'));
    }
  };
};

export default productsSlice.reducer;
