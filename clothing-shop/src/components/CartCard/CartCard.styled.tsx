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

export const Wrapper = styled.div<WrapperProps>`
  display: grid;
  align-items: flex-end;
  width: 240px;
  height: 340px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(52, 53, 99, 0.2), 0 1px 3px rgba(0, 0, 0, 0.05);
  background: ${(props) =>
    props.background && `url(${props.background}) center no-repeat`};
  background-size: 300px;
  overflow: hidden;
  position: relative;
`;

export const AddButton = styled.div<AddButtonProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  background: ${(props) => (props.isInCart ? "#E55336" : "#60c95d")};
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
    transition: 1s;
  }
  p {
    font-size: 20px;
    margin: 0;
    color: white;
  }
`;

export const AddButton2 = styled.div<AddButtonPropsWish>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 20px;
  right: 60px;
  width: 20px;
  height: 20px;
  background: ${(props) => (props.isInWish ? "#E55336" : "#60c95d")};
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
    transition: 1s;
  }
  p {
    font-size: 20px;
    margin: 0;
    color: white;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  padding: 20px 15px;
`;

export const TextContainer = styled.div`
  display: grid;
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

export const QtyContainer = styled.div`
  display: flex;
  color: white;
  border: 1px solid white;
  width: fit-content;
  height: fit-content;
  border-radius: 1em;
`;

export const Decrement = styled.button`
  width 30px;
  height: 30px;
  background-color: rgba(198, 198, 198, 0.45);
  border: none;
  border-radius: 50%;
  color: white;
  padding: 0 10px;
  margin: 1px 0.5px;
  font-size: 15px;
  transition: 0.3s;
  :hover {
    background-color: white;
    color: black;
    transition: 0.3s;
    cursor: pointer;
  }
`;

export const QuantityText = styled.p`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-style: normal;
  font-size: 20px;
  margin: 0;
  color: #ffffff;
  padding: 0 15px;
`;

export const Increment = styled.button`
width 30px;
height: 30px;
background-color: rgba(198, 198, 198, 0.45);
border: none;
border-radius: 50%;
color: white;
padding: 0 10px;
margin: 1px 1px;
font-size: 15px;
transition: 0.3s;
:hover {
  background-color: white;
  color: black;
  transition: 0.3s;
  cursor: pointer;
}
`;
