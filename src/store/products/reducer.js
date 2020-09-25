const initialState = {
  loading: true,
  categories: [],
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case "PRODUCTS_FETCHED": {
      return {
        loading: false,
        categories: [...payload.categories],
      };
    }
    default:
      return state;
  }
}
