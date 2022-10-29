import {BaseFormContainer} from "../common/base-form-container";
import React from "react";
import styled from "styled-components";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const FieldWrapper = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
`;

const LeftFieldsWrapper = styled.div`
    display:flex;
    flex-direction: column;
`;

const RightFieldsWrapper = styled.div`
    display:flex;
    flex-direction: column;
    padding-left: 20px;
`;

const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
};

export const SignUpFormContainer = ({
    inputComponent: InputComponent,
    buttonComponent: ButtonComponent,
    setIsAuth,
    setUser
                                    }) => {
    const navigate = useNavigate();
    const registration = async ({   name,
                             lastname,
                             phone,
                             email,
                             password
    }) => {
        axios.post('http://localhost:7000/api/auth/registration', {
            name,
            lastname,
            phone,
            email,
            password
        })
            .then(res => {
                if(res.data.token) {
                    localStorage.setItem('token', JSON.stringify(res.data.token))
                    setIsAuth(true)
                    setUser(parseJwt(res.data.token))
                    navigate('/')
                }
            })
            .catch(e => {
                console.log(e.message)
            })
    }
    return (
        <BaseFormContainer
            formik={{
                initialValues: {name: "", lastname: "", phone: "", email: "", password: "", repeatPassword: ""},
            }}
            onSubmit={registration}
            renderForm={(handleChange, handleBlur, values) => (

                <>
                    <FieldWrapper>
                        <LeftFieldsWrapper>
                            <InputComponent
                                labelText={"Имя"}
                                inputProps={{
                                    type: "text",
                                    placeholder: "Имя",
                                    name: "name",
                                    onChange: handleChange,
                                    onBlur: handleBlur,
                                    value: values.name,
                                }}
                            />
                            <InputComponent
                                labelText={"Телефон"}
                                inputProps={{
                                    type: "phone",
                                    placeholder: "Номер телефона",
                                    name: "phone",
                                    onChange: handleChange,
                                    onBlur: handleBlur,
                                    value: values.phone,
                                }}
                            />
                            <InputComponent
                                labelText={"Пароль"}
                                inputProps={{
                                    type: "password",
                                    placeholder: "Пароль",
                                    name: "password",
                                    onChange: handleChange,
                                    onBlur: handleBlur,
                                    value: values.password,
                                }}
                            />
                        </LeftFieldsWrapper>
                        <RightFieldsWrapper>
                            <InputComponent
                                labelText={"Фамилия"}
                                inputProps={{
                                    type: "text",
                                    placeholder: "Фамилия",
                                    name: "surname",
                                    onChange: handleChange,
                                    onBlur: handleBlur,
                                    value: values.lastname,
                                }}
                            />
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
                                labelText={"Повторите пароль"}
                                inputProps={{
                                    type: "password",
                                    placeholder: "Повторите пароль",
                                    name: "repeatPass",
                                    onChange: handleChange,
                                    onBlur: handleBlur,
                                    value: values.repeatPassword,
                                }}
                            />
                        </RightFieldsWrapper>
                    </FieldWrapper>
                    <ButtonComponent>Войти</ButtonComponent>
                </>
            )}
        />
    );
};
