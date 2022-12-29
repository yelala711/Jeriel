import { Link, Route, Routes } from "react-router-dom";
import { LinksWrapper, TitleWrapper, Wrapper } from "./App.styled";
import { Wishlist } from "../Wishlist";
import { Cart } from "../Cart";
import { Products } from "../Products";
import { useReducer } from "react";
import { Product } from "../../models";
import { ClothingShopContext } from "../Context";
import { Checkout } from "../Checkout";
import {
  shopReducer,
  initialState,
  add,
  remove,
  update,
  addQty,
  erase,
  save,
  totalItems,
} from "../Reducer";

export const App = () => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product: Product) => {
    const updatedCart = state.products.concat(product);
    updatePrice(updatedCart);

    dispatch(add(updatedCart));
  };

  const removeFromCart = (product: Product) => {
    const updatedCart = state.products.filter(
      (currentProduct: Product) => currentProduct.name !== product.name
    );
    updatePrice(updatedCart);

    dispatch(remove(updatedCart));
  };

  const updatePrice = (products: [] = []) => {
    let total = 0;
    let items = 0;
    products.forEach(
      (product: { price: number; quantity: number }) => (
        (total = total + product.price * product.quantity),
        (items = items + product.quantity)
      )
    );

    dispatch(update(total));
    dispatch(totalItems(items));
  };

  const addToWishlist = (product: Product) => {
    const updatedCart = state.saved.concat(product);
    dispatch(save(updatedCart));
  };

  const removeFromWishlist = (product: Product) => {
    const updatedCart = state.saved.filter(
      (currentProduct: Product) => currentProduct.name !== product.name
    );
    dispatch(erase(updatedCart));
  };

  const updateCart = (product: Product, quantity: number) => {
    const updatedCart = state.products.map((items: { name: string }) =>
      items.name === product.name ? { ...items, quantity: quantity } : items
    );
    dispatch(addQty(updatedCart));

    updatePrice(updatedCart);
  };

  const value = {
    totalitems: state.totalitems,
    total: state.total,
    products: state.products,
    saved: state.saved,
    addToCart,
    removeFromCart,
    addToWishlist,
    removeFromWishlist,
    updatePrice,
    updateCart,
  };
  return (
    <ClothingShopContext.Provider value={value}>
      <Wrapper>
        <TitleWrapper>
          <h1>Clothing Store</h1>
        </TitleWrapper>
        <LinksWrapper>
          <Link to="/">Home</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/checkout">Checkout</Link>
        </LinksWrapper>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Wrapper>
    </ClothingShopContext.Provider>
  );
};
