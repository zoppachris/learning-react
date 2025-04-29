import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductItem } from "../type/product";

interface ProductState {
  product: ProductItem;
  isLoading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  product: {
    id: 0,
    title: "",
    description: "",
    category: "",
    price: 0,
    brand: "",
    rating: 0,
    reviews: [],
    stock: 0,
    tags: [],
  },
  isLoading: false,
  error: null,
};

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async ({ id }: { id: number }) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const json = await res.json();
    return json.products;
  }
);

const productIdSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch produts";
      });
  },
});

export default productIdSlice.reducer;
