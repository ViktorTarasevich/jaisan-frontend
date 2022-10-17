import {BaseFormContainer} from "../common/base-form-container";
import React from "react";

export const ResetPassword = ({
                                  inputComponent: InputComponent,
                                  buttonComponent: ButtonComponent,
                              }) => {
    return (
        <BaseFormContainer
            formik={{
                initialValues: {password: ""},
            }}
            renderForm={(handleChange, handleBlur, values) => (
                <>
                    <InputComponent
                        labelText={"Введите почту для сброса пароля"}
                        inputProps={{
                            type: "email",
                            placeholder: "Email",
                            name: "email",
                            onChange: handleChange,
                            onBlur: handleBlur,
                            value: values.email,
                        }}
                    />
                    <ButtonComponent>Отправить</ButtonComponent>
                </>
            )}
        />
    );
};
