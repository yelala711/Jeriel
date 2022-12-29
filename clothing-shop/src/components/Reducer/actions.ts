import { Product } from "../../models/Product";

export enum ShopActionType {
  ADD_TO_CART = "add-to-cart",
  REMOVE_FROM_CART = "remove-from-cart",
  UPDATE_PRICE = "update-price",
  SAVED = "save",
  ERASE = "erase",
  UPDATE_QTY = "addQty",
  UPDATE_ITEMS = "total-items",
}

export type ShopAction = {
  type: ShopActionType;
  payload: any;
};

export const add = (product: Product): ShopAction => ({
  type: ShopActionType.ADD_TO_CART,
  payload: product,
});

export const remove = (product: Product): ShopAction => ({
  type: ShopActionType.REMOVE_FROM_CART,
  payload: product,
});

export const update = (total: number): ShopAction => ({
  type: ShopActionType.UPDATE_PRICE,
  payload: total,
});

export const save = (product: Product): ShopAction => ({
  type: ShopActionType.SAVED,
  payload: product,
});
export const erase = (product: Product): ShopAction => ({
  type: ShopActionType.ERASE,
  payload: product,
});

export const addQty = (priceProd: number): ShopAction => ({
  type: ShopActionType.UPDATE_QTY,
  payload: priceProd,
});
export const totalItems = (totalitems: number): ShopAction => ({
  type: ShopActionType.UPDATE_ITEMS,
  payload: totalitems,
});
