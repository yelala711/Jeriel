import { useContext } from "react";
import { Product } from "../../models";
import { ClothingShopContext } from "../Context";
import { CheckoutCard } from "../CheckoutCard";
import { ProductsWrapper, Title } from "./Checkout.styled";

export const Checkout = () => {
  const { products, total } = useContext(ClothingShopContext);
  return (
    <>
      <Title>
        {products.length
          ? `Item Checkout Total: ₱ ${total}.00`
          : "No items Checked out."}
      </Title>
      <ProductsWrapper>
        {products.map((product: Product, index) => (
          <CheckoutCard {...product} key={index} />
        ))}
      </ProductsWrapper>
    </>
  );
};
