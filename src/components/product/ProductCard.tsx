import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { ProductItem } from "../../type/product";

type ProductCardProps = {
  product: ProductItem;
};

const ProductCard = ({ product }: ProductCardProps) => {
  
  return (
    <Card sx={{ minWidth: 275, height: "100%" }} key={product.id}>
      <CardContent>
        <Typography variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          {product.category}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1.5 }}>
          {product.description}
        </Typography>
        <Typography variant="h5" component="div">
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Detail</Button>
      </CardActions>
    </Card>
  );
};

export default React.memo(ProductCard);
