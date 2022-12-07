import React from "react";
import styled, {keyframes} from "styled-components";
import {headShake} from "react-animations";

interface CustomInputInterface {
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    error: boolean;
}

const CustomInput = ({placeholder, onChange, value, error}: CustomInputInterface) => {

    return (
        <StyledInput
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className={error ? 'error' : ''}
        />
    )
}
export default CustomInput

const errorAnim = keyframes`${headShake}`;

const StyledInput = styled.input`
  outline: none;
  border: 2px solid transparent;
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: ${({theme}) => theme.shadow.default};
  min-width: 300px;
  margin-bottom: 30px;

  &.error {
    box-shadow: ${({theme}) => theme.shadow.error};
    animation: ${errorAnim} 1s forwards;
  }

  :focus {
    box-shadow: ${({theme}) => theme.shadow.focused};
  }
`;