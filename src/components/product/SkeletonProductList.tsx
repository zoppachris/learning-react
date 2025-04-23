import { Grid } from "@mui/material";
import SkeletonProductCard from "./SkeletonProductCard";
import React from "react";

const SkeletonProductList = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 2, sm: 8, md: 12 }}
    >
      {Array.from({ length: 10 }).map((_, i) => (
        <Grid size={{ xs: 2, sm: 4, md: 4 }} key={`skeleton-${i}`}>
          <SkeletonProductCard />
        </Grid>
      ))}
    </Grid>
  );
};

export default React.memo(SkeletonProductList);
