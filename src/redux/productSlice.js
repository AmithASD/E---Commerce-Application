import { createSlice } from "@reduxjs/toolkit";

// API Functions
import { saveProducts, updateProduct, deleteProduct } from "../services/api_servise";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.products = action.payload;
    },
    addProductLocal: (state, action) => {
      state.products.push(action.payload);
    },

    updateProductLocal: (state, action) => {
      const { productId } = action.payload;
      const product = state.products.find((product) => product.id === productId);
      if (product) {
       
      }
    },
    removeProductLocal: (state, action) => {
      const { productId } = action.payload;
      const product = state.products.find((product) => product.id === productId);
      if (product) {
        
      }
    },
  },
});

export const {
    setProduct,
    addProductLocal,
    updateProductLocal,
    removeProductLocal,
} = productSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/api/products");
    const products = await response.json();
    dispatch(saveProducts(products));
  } catch (error) {
    console.error("Error fetching rooms:", error);
  }
};

export const updateProduc = (prdoductId) => async (dispatch) => {
  try {
    const updateProduct = await deleteProduct(prdoductId);
    dispatch(updateProduct(prdoductId));
  } catch (error) {
    console.error("Error updating table:", error);
  }
};

export default productSlice.reducer;
