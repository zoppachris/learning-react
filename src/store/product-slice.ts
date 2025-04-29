import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductItem } from "../type/product";

interface ProductState {
  products: ProductItem[];
  isLoading: boolean;
  loadMore: boolean;
  error: string | null;
  skip: number;
  limit: number;
}

const initialState: ProductState = {
  products: [],
  isLoading: false,
  loadMore: false,
  error: null,
  skip: 0,
  limit: 10,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ skip, limit }: { skip: number; limit: number }) => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    const json = await res.json();
    return json.products;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSkip: (state, action: PayloadAction<number>) => {
      state.skip = action.payload;
      state.loadMore = true;
    },
    resetProducts: (state) => {
      state.products = [];
      state.skip = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.loadMore) {
          state.products = [...state.products, ...action.payload];
        } else {
          state.products = action.payload;
        }
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.loadMore = false;
        state.error = action.error.message || "Failed to fetch produts";
      });
  },
});

export const { setSkip, resetProducts } = productSlice.actions;
export default productSlice.reducer;
