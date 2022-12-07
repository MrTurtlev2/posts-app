import CustomInput from "../components/common/CustomInput";
import {useState} from "react";
import styled from "styled-components";
import CustomButton from "../components/common/CustomButton";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [name, setName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const navigate = useNavigate();
    const handleLogin = () => {

        if (name && lastName && password !== '') {
            sessionStorage.setItem('userData', JSON.stringify({
                name: name,
                lastName: lastName,
                password: password
            }))
            navigate('/dashboard')
        }
    }

    return (
        <ScreenWrapper>
            <FormWrapper>
                <CustomInput placeholder='wpisz imie' onChange={(event) => setName(event.target.value)} value={name}/>
                <CustomInput placeholder='wpisz nazwisko' onChange={(event) => setLastName(event.target.value)}
                             value={lastName}/>
                <CustomInput placeholder='wpisz hasło' onChange={(event) => setPassword(event.target.value)}
                             value={password}/>

                <CustomButton buttonText='zaloguj się' onClick={() => handleLogin()}/>
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
  height: 90vh;
`;
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
