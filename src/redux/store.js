import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage,
} from "../utills/localStorage";

const preloadedState = loadStateFromLocalStorage();

const store = configureStore({
  reducer: {
    products: productReducer,
  },
  preloadedState,
});

// Save state to localStorage on every state change
store.subscribe(() => {
  saveStateToLocalStorage(store.getState().products);
});

export default store;
