import {BaseFormContainer} from "../common/base-form-container";
import React from "react";
import styled from "styled-components";

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

export const SignUpFormContainer = ({
                                        inputComponent: InputComponent,
                                        buttonComponent: ButtonComponent,
                                    }) => {
    return (
        <BaseFormContainer
            formik={{
                initialValues: {name: "", surname: "", phone: "", email: "", password: "", repeatPassword: ""},
            }}
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
                                    value: values.surname,
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