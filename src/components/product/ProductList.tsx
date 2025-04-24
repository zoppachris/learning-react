import React, { useCallback, useMemo, useState } from "react";
import { Button, Grid, Stack, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import {
  fetchMoreProducts,
  productResource,
} from "../../api/product/fetchProducts";
import { ProductItem } from "../../type/product";
import SkeletonProductCard from "../skeleton/SkeletonProductCard";
import SearchButton from "./SearchButton";
import { BigArray } from "../../data/Links";

const expensiveCalculation = (num: number) => {
  console.log("Calculating...");
  var result = 0;
  for (let index = 0; index <= 100000000; index++) {
    result = num * index;
  }
  return result;
};

const ProductList: React.FC = () => {
  const initialProducts = productResource.read();
  const [products, setProducts] = useState<ProductItem[]>(initialProducts);
  const [filteredProducts, setfilteredProducts] =
    useState<ProductItem[]>(products);
  const [skip, setSkip] = useState<number>(initialProducts.length);
  const [loading, setLoading] = useState(false);
  const limit = 10;
  const [count, setCount] = useState<number>(0);
  const [items] = useState(BigArray);

  const selectedItem = useMemo(() => items.find((item) => item.isSelected), []);

  // const expensiveNumber = useMemo(() => expensiveCalculation(count), [count]);

  const loadMore = async () => {
    setLoading(true);
    const more = await fetchMoreProducts(skip, limit);
    setProducts((prev) => [...prev, ...more]);
    setfilteredProducts([...products, ...more]);
    setSkip((prev) => prev + limit);
    setLoading(false);
  };

  const filterProduct = useCallback(
    (text: string) => {
      const filterProduct = products.filter((product) =>
        product.title.includes(text)
      );
      setfilteredProducts(filterProduct);
    },
    [products]
  );

  return (
    <Stack spacing={1}>
      <Typography variant="h3" align="center">
        Selected : {selectedItem?.id}
      </Typography>
      {/* <Typography variant="h3" align="center">
        Expensive Calculation : {expensiveNumber}
      </Typography> */}
      <Button variant="contained" onClick={() => setCount(count + 1)}>
        Count : {count}
      </Button>
      <SearchButton onChange={filterProduct} />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {filteredProducts.map((productItem) => {
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
