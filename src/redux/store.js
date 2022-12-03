import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./authSlice";
import categorySlice from "./categorySlice";

export default configureStore({
  reducer: {
    authSlice: authSlice,
    categorySlice: categorySlice,
  },
});
