import CustomInput from "../components/common/CustomInput";
import {useState} from "react";
import styled from "styled-components";
import CustomButton from "../components/common/CustomButton";

const Login = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')


    return (
        <ScreenWrapper>
            <FormWrapper>
                <CustomInput placeholder='wpisz email' onChange={(event) => setEmail(event.target.value)} value={email}
                />
                <CustomInput placeholder='wpisz hasło' onChange={(event) => setPassword(event.target.value)}
                             value={password}/>

                <CustomButton buttonText='zaloguj się' onClick={() => {
                }}/>
            </FormWrapper>
        </ScreenWrapper>
    )
}
export default Login

const ScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

`;
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
