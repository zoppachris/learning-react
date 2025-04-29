import { configureStore } from "@reduxjs/toolkit";
import habitsReducer from "./habit-slice";
import productReducer from "./product-slice";
import productIdReducer from "./productid-slice";

const store = configureStore({
  reducer: {
    habits: habitsReducer,
    products: productReducer,
    product: productIdReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
