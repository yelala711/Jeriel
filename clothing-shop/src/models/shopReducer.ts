export const initialState = {
  total: 0,
  products: [],
};

const shopReducer = (state: any, action: { type: any; payload: any }) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      console.log("ADD_TO_CART", payload);
      return {
        ...state,
        products: payload.products,
      };
    case "REMOVE_FROM_CART":
      console.log("REMOVE_FROM_CART", payload);
      return {
        ...state,
        products: payload.products,
      };
    case "UPDATE_PRICE":
      console.log("UPDATE_PRICE", payload);
      return {
        ...state,
        total: payload.total,
      };
    default:
      throw new Error(`No case for type ${type} found in shop reducer`);
  }
};

export default shopReducer;
