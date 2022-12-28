import { createContext, useReducer, useContext } from "react";
import shopReducer, { initialState } from "./shopReducer";

const ShopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product: any) => {
    const updatedCart = state.products.concat(product);
    updatePrice(updatedCart);

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCart,
      },
    });
  };

  const removeFromCart = (product: { name: any }) => {
    const updatedCart = state.products.filter(
      (currentProduct: { name: any }) => currentProduct.name !== product.name
    );

    updatePrice(updatedCart);

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCart,
      },
    });
  };

  const updatePrice = (products: any[]) => {
    let total = 0;
    products.forEach((product: { price: number }) => (total += product.price));

    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        total,
      },
    });
  };

  const val = {
    total: state.total,
    products: state.products,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={value}> {children} </ShopContext.Provider>
  );
};

const useShop = () => {
  const context = useContext(ShopContext);

  if (context === undefined) {
    throw new Error(`useShop must be used within ShopContext`);
  }
  return context;
};

export default useShop;
