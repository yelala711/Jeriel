import { createContext } from "react";
import { ShopState, initialState } from "../Reducer";

export const ClothingShopContext = createContext<ShopState>(initialState);
