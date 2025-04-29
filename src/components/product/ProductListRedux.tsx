import React, { useEffect, useState } from "react";
import { Button, Grid, Stack } from "@mui/material";
import ProductCard from "./ProductCard";
import { ProductItem } from "../../type/product";
import SkeletonProductCard from "../skeleton/SkeletonProductCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import {
  fetchProducts,
  resetProducts,
  setSkip,
} from "../../store/product-slice";

const ProductListRedux: React.FC = () => {
  const [firstRender, setFirstRender] = useState(true);
  const { products, skip, limit, isLoading } = useSelector(
    (state: RootState) => state.products
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      dispatch(resetProducts());
    } else {
      dispatch(fetchProducts({ skip, limit }));
    }
  }, [dispatch, skip, limit, firstRender]);

  const handleLoadMore = () => {
    dispatch(setSkip(skip + limit));
  };

  return (
    <Stack spacing={1} sx={{ mt: 4 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {products.map((productItem: ProductItem) => {
          return (
            <Grid key={productItem.id} size={{ xs: 2, sm: 4, md: 4 }}>
              <ProductCard product={productItem} />
            </Grid>
          );
        })}
        {isLoading &&
          Array.from({ length: limit }).map((_, i) => (
            <Grid size={{ xs: 2, sm: 4, md: 4 }} key={`skeleton-${i}`}>
              <SkeletonProductCard />
            </Grid>
          ))}
      </Grid>
      <Button
        onClick={handleLoadMore}
        loading={isLoading}
        sx={{ mt: 20 }}
        variant="contained"
      >
        {isLoading ? "Memuat..." : "Tambah Produk"}
      </Button>
    </Stack>
  );
};

export default ProductListRedux;
