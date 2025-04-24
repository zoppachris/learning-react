import React, { useReducer } from "react";
import { Button, Grid, Stack } from "@mui/material";
import ProductCard from "./ProductCard";
import {
  fetchMoreProducts,
  productResource,
} from "../../api/product/fetchProducts";
import { ProductItem } from "../../type/product";
import SkeletonProductCard from "../skeleton/SkeletonProductCard";
import { productReducer } from "../../reducer/product";

const ProductListReducer: React.FC = () => {
  const initialProducts = productResource.read();
  const [state, dispatch] = useReducer(productReducer, {
    products: initialProducts,
    skip: initialProducts.length,
    loading: false,
    limit: 10,
    count: 0,
  });

  const loadMore = async () => {
    const moreProductResult = await fetchMoreProducts(state.skip, state.limit);
    dispatch({ type: "load-more", payload: moreProductResult });
  };

  return (
    <Stack spacing={1}>
      <Button
        variant="contained"
        onClick={() => dispatch({ type: "count-increment" })}
      >
        Count : {state.count}
      </Button>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {state.products.map((productItem: ProductItem) => {
          return (
            <Grid key={productItem.id} size={{ xs: 2, sm: 4, md: 4 }}>
              <ProductCard product={productItem} />
            </Grid>
          );
        })}
        {state.loading &&
          Array.from({ length: state.limit }).map((_, i) => (
            <Grid size={{ xs: 2, sm: 4, md: 4 }} key={`skeleton-${i}`}>
              <SkeletonProductCard />
            </Grid>
          ))}
      </Grid>
      <Button
        onClick={loadMore}
        loading={state.loading}
        sx={{ mt: 20 }}
        variant="contained"
      >
        {state.loading ? "Memuat..." : "Tambah Produk"}
      </Button>
    </Stack>
  );
};

export default ProductListReducer;
