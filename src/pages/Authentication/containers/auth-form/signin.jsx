import {BaseFormContainer} from "../common/base-form-container";
import React from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
};

export const SignInFormContainer = ({
                                        inputComponent: InputComponent,
                                        buttonComponent: ButtonComponent,
                                        setIsAuth,
                                        setUser
                                    }) => {

    const navigate = useNavigate();
    const login = async ({email, password}) => {
        const res = await axios.post('http://localhost:7000/api/auth/login', {
            email,
            password
        })
        if(res.data.token) {
            localStorage.setItem('token', JSON.stringify(res.data.token))
            setIsAuth(true)
            setUser(parseJwt(res.data.token))
            navigate('/')
        }
    }
    return (
        <BaseFormContainer
            setIsAuth={setIsAuth}
            setUser={setUser}
            formik={{
                initialValues: {email: "", password: ""},
            }}
            onSubmit={login}
            renderForm={(handleChange, handleBlur, values) => (
                <>
                    <InputComponent
                        labelText={"Почта"}
                        inputProps={{
                            type: "email",
                            placeholder: "Email",
                            name: "email",
                            onChange: handleChange,
                            onBlur: handleBlur,
                            value: values.email,
                        }}
                    />
                    <InputComponent
                        labelText={"Пароль"}
                        inputProps={{
                            placeholder: "Пароль",
                            name: "password",
                            onChange: handleChange,
                            onBlur: handleBlur,
                            value: values.password,
                        }}
                    />
                    <ButtonComponent>Войти</ButtonComponent>
                </>
            )}
        />
    );
};
