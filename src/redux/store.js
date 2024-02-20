// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // Import your root reducer

const store = configureStore({
  reducer: rootReducer,
  // Additional middleware or configuration can be added here
});

export default store;
