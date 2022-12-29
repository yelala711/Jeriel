import styled from "styled-components";

type WrapperProps = {
  background: string;
};

type AddButtonProps = {
  isInCart: boolean;
};

type AddButtonPropsWish = {
  isInWish: boolean;
};

export const Wrapper = styled.div`
  display: grid;
  align-items: flex-end;
  width: 340px;
  height: fit-content;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(52, 53, 99, 0.2), 0 1px 3px rgba(0, 0, 0, 0.05);
  background: gray;
  background-size: 300px;
  overflow: hidden;
  position: relative;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 340px;
  height: fit-content;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(52, 53, 99, 0.2), 0 1px 3px rgba(0, 0, 0, 0.05);
  background: rgba(184, 184, 184, 0.45);
  background-size: 300px;
  overflow: hidden;
  position: relative;
`;

export const ImageWrapper = styled.div<WrapperProps>`
  width: 100px;
  height: 100px;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(52, 53, 99, 0.2), 0 1px 3px rgba(0, 0, 0, 0.05);
  background: ${(props) =>
    props.background && `url(${props.background}) center no-repeat`};
  background-size: 100px;
  overflow: hidden;
  position: relative;
  margin: 10px 20px;
`;

export const TextContainer = styled.div`
  display: grid;
  gap: 10px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  width: 50%;
  padding: 20px;
`;

export const Title = styled.p`
  font-weight: 500;
  font-style: normal;
  font-size: 24px;
  margin: 0;
  color: #ffffff;
`;

export const SubTitle = styled.p`
  font-weight: normal;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
`;
