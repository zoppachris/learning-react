import { Container, Typography } from "@mui/material";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import SkeletonProductList from "../components/skeleton/SkeletonProductList";
import ProductListReducer from "../components/product/ProductListReducer";
import HabitList from "../components/habit/HabitList";

const ErrorFallback = ({ error }: { error: Error }) => (
  <div>Error: {error.message}</div>
);

const ProductReducer: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Typography component="h1" variant="h2" align="center">
        Product Reducer
      </Typography>
      <HabitList />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<SkeletonProductList />}>
          <ProductListReducer />
        </Suspense>
      </ErrorBoundary>
    </Container>
  );
};

export default ProductReducer;
