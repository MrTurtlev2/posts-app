import React from "react";
import styled from "styled-components";

interface CustomInputInterface {
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

const CustomInput = ({placeholder, onChange, value}: CustomInputInterface) => {

    return (
        <StyledInput
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    )
}
export default CustomInput

const StyledInput = styled.input`
  outline: none;
  border: 2px solid transparent;
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: ${({theme}) => theme.shadow.default};
  min-width: 300px;
  margin-bottom: 30px;

  :focus {
    box-shadow: ${({theme}) => theme.shadow.focused};
  }
`;