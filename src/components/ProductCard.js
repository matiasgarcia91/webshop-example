import React from "react";
import Card from "@material-ui/core/Card";

const ProductCard = ({ product }) => {
  return (
    <Card
      elevation={2}
      style={{ maxWidth: 300, padding: 10, margin: 10, minWidth: 300 }}
    >
      <img src={product.imageUrl} style={{ maxHeight: 250 }} />
      <h3>{product.name}</h3>
      <p>Lorem ipsum etc</p>
    </Card>
  );
};

export default ProductCard;
