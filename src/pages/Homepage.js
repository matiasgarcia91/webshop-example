import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../store/products/actions";
import {
  getAllProducts,
  getCategories,
  getAmountOfItems,
  getTotalAmount,
} from "../store/products/selectors";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
  const [filters, setFilters] = useState([]);
  const dispatch = useDispatch();
  const allProducts = useSelector(getAllProducts);
  const categories = useSelector(getCategories);
  const nrCartItems = useSelector(getTotalAmount);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const onActivateFilters = categoryId => {
    if (filters.includes(categoryId)) {
      setFilters(filters => filters.filter(c => c !== categoryId));
    } else {
      setFilters(filters => [...filters, categoryId]);
    }
  };

  const filteredProducts = filters.length
    ? allProducts.filter(p => filters.includes(p.categoryId))
    : allProducts;

  return (
    <div
      style={{
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Any change works</h2>
        <div
          style={{
            height: 100,
            width: 50,
            paddingTop: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2 style={{ marginRight: 10 }}>{nrCartItems}</h2>

          <FontAwesomeIcon icon={faShoppingCart} size='2x' />
        </div>
      </div>
      <div>
        {!categories.length ? (
          <CircularProgress />
        ) : (
          categories.map(c => (
            <Button
              variant={filters.includes(c.id) ? "contained" : "outlined"}
              color='primary'
              style={{ margin: 5 }}
              onClick={() => onActivateFilters(c.id)}
              key={c.id}
            >
              {c.name}
            </Button>
          ))
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {filteredProducts.map(p => (
          <ProductCard product={p} key={p.id} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
