import styled from "styled-components";

interface CustomButtonInterface {
    onClick: () => void;
    buttonText: string;
}

const CustomButton = ({onClick, buttonText}: CustomButtonInterface) => {

    return (
        <ButtonWrapper onClick={onClick}>
            <ButtonText>{buttonText}</ButtonText>
        </ButtonWrapper>
    )
}
export default CustomButton

const ButtonWrapper = styled.div`
  cursor: pointer !important;
  background-color: ${({theme}) => theme.white};
  padding: 20px 30px;
  border-radius: 10px;
  min-width: 300px;
  text-align: center;
  transition: all 0.8s;
  box-shadow: ${({theme}) => theme.shadow.default};

  :hover {
    box-shadow: ${({theme}) => theme.shadow.focused};

  }
`;
const ButtonText = styled.p`
  //color: white;
  font-size: 18px;
`;