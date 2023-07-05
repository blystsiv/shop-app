import IComment from './types/comment';
import IProduct from './types/product';

const API_URL = 'http://localhost:3030/products';

export const fetchProducts = async (): Promise<IProduct[]> => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

export const fetchProduct = async (id: string): Promise<IProduct> => {
  const response = await fetch(`${API_URL}/${id}`);
  const data = await response.json();
  return data;
};

export const createProduct = async (product: IProduct): Promise<IProduct> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  const data = await response.json();
  return data;
};

export const deleteProduct = async (id: number): Promise<void> => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
};

export const editProduct = async (product: IProduct): Promise<IProduct> => {
  const response = await fetch(`${API_URL}/${product.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  const data = await response.json();
  return data;
};

export const addComment = async (productId: number, comment: IComment): Promise<IComment> => {
  const response = await fetch(`${API_URL}/${productId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  });
  const data = await response.json();
  return data;
};

export const deleteComment = async (productId: number, commentId: number): Promise<void> => {
  await fetch(`${API_URL}/${productId}/comments/${commentId}`, {
    method: 'DELETE',
  });
};
