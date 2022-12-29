import { useContext, useState } from "react";
import { Product } from "../../models";
import { ClothingShopContext } from "../Context";
import { ProductCard } from "../ProductCard";
import { ProductsWrapper, Title, CheckoutButton } from "./Wishlist.styled";

export const Wishlist = () => {
  const [clear, setClear] = useState([]);
  const { saved } = useContext(ClothingShopContext);

  return (
    <>
      <Title>
        {saved.length} {saved.length > 1 ? "items" : "Item"} in your wishlist
        currently
      </Title>
      <ProductsWrapper>
        {saved.map((product: Product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </ProductsWrapper>
    </>
  );
};
