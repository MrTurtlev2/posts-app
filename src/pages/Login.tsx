import CustomInput from "../components/common/CustomInput";
import {useState} from "react";
import styled from "styled-components";
import CustomButton from "../components/common/CustomButton";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../types/hooks";
import {logUserWithCredentials} from "../state/user/UserDataSlice";

const Login = () => {
    const [name, setName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [nameError, setNameError] = useState<boolean>(false)
    const [lastNameError, setLastNameError] = useState<boolean>(false)
    const [passwordError, setPasswordError] = useState<boolean>(false)

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleLogin = () => {
        if (name === '') setNameError(true)
        if (lastName === '') setLastNameError(true)
        if (password === '') setPasswordError(true)

        if (name && lastName && password !== '') {
            const user = {
                isLoggedIn: true,
                name: name,
                lastName: lastName,
                password: password,
            }
            dispatch(logUserWithCredentials({...user}))
            navigate('/dashboard')
        }
    }

    return (
        <ScreenWrapper>
            <FormWrapper>
                <CustomInput placeholder='wpisz imie' onChange={(event) => setName(event.target.value)} value={name}
                             error={nameError}/>
                <CustomInput placeholder='wpisz nazwisko' onChange={(event) => setLastName(event.target.value)}
                             value={lastName} error={lastNameError}/>
                <CustomInput placeholder='wpisz hasło' onChange={(event) => setPassword(event.target.value)}
                             value={password} error={passwordError}/>

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
