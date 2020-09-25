import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../store/products/actions";
import { getAllProducts, getCategories } from "../store/products/selectors";
import Button from "@material-ui/core/Button";

const Homepage = () => {
  const [filters, setFilters] = useState([]);
  const dispatch = useDispatch();
  const allProducts = useSelector(getAllProducts);
  const categories = useSelector(getCategories);
  console.log("component", categories);

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
      <h2>Homepage</h2>
      <div>
        {categories.map(c => (
          <Button
            variant={filters.includes(c.id) ? "contained" : "outlined"}
            color='primary'
            style={{ margin: 5 }}
            onClick={() => onActivateFilters(c.id)}
          >
            {c.name}
          </Button>
        ))}
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
