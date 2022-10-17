import {BaseFormContainer} from "../common/base-form-container";
import React from "react";


export const SignInFormContainer = ({
                                        inputComponent: InputComponent,
                                        buttonComponent: ButtonComponent,
                                    }) => {

    return (
        <BaseFormContainer
            formik={{
                initialValues: {email: "", password: ""},
            }}
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
