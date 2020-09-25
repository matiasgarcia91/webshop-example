import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/products/actions";
import { isItemInCart } from "../store/products/selectors";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const isInCart = useSelector(isItemInCart(product.id));

  return (
    <Card
      elevation={2}
      style={{ maxWidth: 300, padding: 10, margin: 10, minWidth: 300 }}
    >
      <img src={product.imageUrl} style={{ maxHeight: 250 }} />
      <h3>{product.name}</h3>
      <p>Lorem ipsum etc</p>
      <Button
        variant='contained'
        color='primary'
        size='large'
        onClick={() => dispatch(addToCart(product.id))}
      >
        <FontAwesomeIcon icon={faCartPlus} />
        {isInCart?.quantity}
      </Button>
      {isInCart && (
        <Button
          color='secondary'
          variant='contained'
          style={{ marginLeft: 10 }}
          onClick={() => dispatch(removeFromCart(product.id))}
        >
          Remove
        </Button>
      )}
    </Card>
  );
};
export default ProductCard;
