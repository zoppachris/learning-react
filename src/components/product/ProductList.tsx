import React, { useState } from "react";
import { Button, Grid, Stack } from "@mui/material";
import ProductCard from "./ProductCard";
import {
  fetchMoreProducts,
  productResource,
} from "../../api/product/fetchProducts";
import { ProductItem } from "../../type/product";
import SkeletonProductCard from "./SkeletonProductCard";

const ProductList: React.FC = () => {
  const initialProducts = productResource.read();
  const [products, setProducts] = useState<ProductItem[]>(initialProducts);
  const [skip, setSkip] = useState<number>(initialProducts.length);
  const [loading, setLoading] = useState(false);
  const limit = 10;
  const [count, setCount] = useState<number>(0);

  const loadMore = async () => {
    setLoading(true);
    const more = await fetchMoreProducts(skip, limit);
    setProducts((prev) => [...prev, ...more]);
    setSkip((prev) => prev + limit);
    setLoading(false);
  };

  return (
    <Stack spacing={1}>
      <Button variant="contained" onClick={() => setCount(count + 1)}>
        {count}
      </Button>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {products.map((productItem) => {
          return (
            <Grid key={productItem.id} size={{ xs: 2, sm: 4, md: 4 }}>
              <ProductCard product={productItem} />
            </Grid>
          );
        })}
        {loading &&
          Array.from({ length: limit }).map((_, i) => (
            <Grid size={{ xs: 2, sm: 4, md: 4 }} key={`skeleton-${i}`}>
              <SkeletonProductCard />
            </Grid>
          ))}
      </Grid>
      <Button
        onClick={loadMore}
        loading={loading}
        sx={{ mt: 20 }}
        variant="contained"
      >
        {loading ? "Memuat..." : "Tambah Produk"}
      </Button>
    </Stack>
  );
};

export default ProductList;
