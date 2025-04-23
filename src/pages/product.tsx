import { Container, Typography } from "@mui/material";
import React, { Suspense } from "react";
import ProductList from "../components/product/ProductList";
import { ErrorBoundary } from "react-error-boundary";
import SkeletonProductList from "../components/product/SkeletonProductList";

const ErrorFallback = ({ error }: { error: Error }) => (
  <div>Error: {error.message}</div>
);

const Product: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Typography component="h1" variant="h2" align="center">
        Product
      </Typography>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<SkeletonProductList />}>
          <ProductList />
        </Suspense>
      </ErrorBoundary>
    </Container>
  );
};

export default Product;
