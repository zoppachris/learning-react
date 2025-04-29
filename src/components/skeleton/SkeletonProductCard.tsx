import React from "react";
import { Card, CardContent, Skeleton } from "@mui/material";

const SkeletonProductCard = () => {
  return (
    <Card sx={{ minWidth: 275, height: "100%" }}>
      <Skeleton variant="rectangular" height={200} sx={{ mb: 1 }} />
      <CardContent>
        <Skeleton variant="rectangular" height={20} sx={{ mb: 1 }} />
        <Skeleton variant="rectangular" height={30} sx={{ mb: 1 }} />
        <Skeleton variant="rectangular" height={20} sx={{ mb: 2 }} />
        <Skeleton variant="rectangular" height={100} sx={{ mb: 1 }} />
        <Skeleton variant="rectangular" height={30} sx={{ mb: 1 }} />
      </CardContent>
      <CardContent>
        <Skeleton variant="rectangular" height={20} width={80} />
      </CardContent>
    </Card>
  );
};

export default React.memo(SkeletonProductCard);
