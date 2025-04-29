import { Container, Typography } from "@mui/material";
import React from "react";
import HabitList from "../components/habit/HabitList";
import ProductListRedux from "../components/product/ProductListRedux";

const ProductRedux: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Typography component="h1" variant="h2" align="center">
        Product Reducer
      </Typography>
      <HabitList />
      <ProductListRedux />
    </Container>
  );
};

export default ProductRedux;
