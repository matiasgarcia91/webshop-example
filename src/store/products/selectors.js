export const getAllProducts = state =>
  state.products.categories.flatMap(c => c.products);

export const getCategories = state => state.products.categories;
export const productsByCategory = state => state;
