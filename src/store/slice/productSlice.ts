import { createSlice } from "@reduxjs/toolkit";

interface Product {
  id: number | string;
  name: string;
  price: number;
  quantity: number;
}

interface ProductsState {
  items: Product[];
}

const initialState: ProductsState = {
  items: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { payload } = action;
      const itemInCart = state.items.find(item => item.id === payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.items.push({ ...payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const { payload } = action;
      const item = state.items.find(item => item.id === payload);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { payload } = action;
      const item = state.items.find(item => item.id === payload);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const { payload } = action;
      state.items = state.items.filter(item => item.id !== payload);
    },
    emptyCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeItem, incrementQuantity, decrementQuantity, emptyCart } = productSlice.actions;
export default productSlice.reducer;
