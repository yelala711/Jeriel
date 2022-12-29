import {
  AddButton,
  AddButton2,
  SubTitle,
  TextContainer,
  Title,
  Wrapper,
  QtyContainer,
  Decrement,
  QuantityText,
  Increment,
  InfoContainer,
} from "./CartCard.styled";

import { Product } from "../../models";
import { useContext, useState, useEffect } from "react";
import { ClothingShopContext } from "../Context";
import { FiGift } from "react-icons/fi";
import { FaGift } from "react-icons/fa";

export const CartCard = ({ name, imageUrl, price, quantity }: Product) => {
  const {
    products,
    addToCart,
    removeFromCart,
    saved,
    removeFromWishlist,
    addToWishlist,
    updateCart,
  } = useContext(ClothingShopContext);
  const [isInCart, setIsInCart] = useState(false);
  const [isInWish, setIsInWish] = useState(false);
  const [qty, setQuantity] = useState(quantity);

  useEffect(() => {
    const cartItems = products.find(
      (product: { name: string }) => product.name === name
    );
    const wishItems = saved.find(
      (product: { name: string }) => product.name === name
    );

    if (cartItems && wishItems) {
      setIsInCart(true);
      setIsInWish(true);
    } else if (!cartItems && wishItems) {
      setIsInCart(false);
      setIsInWish(true);
    } else if (cartItems && !wishItems) {
      setIsInCart(true);
      setIsInWish(false);
    } else {
      setIsInCart(false);
      setIsInWish(false);
    }
  }, [products, saved, name]);

  useEffect(() => {
    updateCart({ name, imageUrl, price }, qty);
  }, [qty]);

  const handleClick = () => {
    const product = { name, imageUrl, price, quantity };
    if (isInCart) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  const handleWishlist = () => {
    const product = { name, imageUrl, price, quantity };
    if (isInWish) {
      removeFromWishlist(product);
    } else {
      addToWishlist(product);
    }
  };

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleSub = () => {
    if (qty > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Wrapper background={imageUrl}>
      <AddButton2 isInWish={isInWish} onClick={handleWishlist}>
        <p>{isInWish ? <FiGift /> : <FaGift />}</p>
      </AddButton2>
      <AddButton isInCart={isInCart} onClick={handleClick}>
        <p>{isInCart ? "-" : "+"}</p>
      </AddButton>
      <InfoContainer>
        <TextContainer>
          <Title>{name}</Title>
          <SubTitle>₱ {price}.00</SubTitle>
        </TextContainer>
        <QtyContainer>
          <Decrement onClick={handleSub}>-</Decrement>
          <QuantityText>{quantity}</QuantityText>
          <Increment onClick={handleAdd}>+</Increment>
        </QtyContainer>
      </InfoContainer>
    </Wrapper>
  );
};
