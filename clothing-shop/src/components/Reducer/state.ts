import { Product } from "../../models";

export type ShopState = {
  products: Product[];
  saved: Product[];
  total: number;
  totalitems: number;
  addToCart: any;
  removeFromCart: any;
  addToWishlist: any;
  removeFromWishlist: any;
  updatePrice: any;
  updateCart: any;
};

export const initialState = {
  products: [],
  saved: [],
  totalitems: 0,
  total: 0,
  addToCart: null,
  removeFromCart: null,
  addToWishlist: null,
  removeFromWishlist: null,
  updatePrice: null,
  updateCart: null,
};
