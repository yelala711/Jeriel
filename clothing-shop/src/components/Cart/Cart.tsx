import { useContext } from "react";
import { Product } from "../../models";
import { ClothingShopContext } from "../Context";
import { CartCard } from "../CartCard";
import {
  ProductsWrapper,
  Title,
  CheckoutButton,
  TitleWrapper,
} from "./Cart.styled";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { products, total } = useContext(ClothingShopContext);
  return (
    <>
      <TitleWrapper>
        <Title>
          {products.length
            ? `Item Checkout Total ₱ ${total}.00`
            : "No items selected, Cart is Empty."}
        </Title>
        {products.length > 0 && (
          <Link to="/checkout">
            <CheckoutButton>Checkout</CheckoutButton>
          </Link>
        )}
      </TitleWrapper>
      <ProductsWrapper>
        {products.map((product: Product, index) => (
          <CartCard {...product} key={index} />
        ))}
      </ProductsWrapper>
    </>
  );
};
