import {FormFooter} from "../../styled/form";
import React from "react";
import styled from "styled-components";

const LinkPage = styled.div`
cursor: pointer;
font-size: 26px;
margin-bottom: 26px;
:hover,
:focus {
	transform: scale(1.09);
}
`;

export const FooterWrapper = ({setSignUpMode, setRestoreMode}) => {

    return (
        <FormFooter>
            <LinkPage onClick={setSignUpMode}>Регистрация</LinkPage>
            <LinkPage onClick={setRestoreMode}>Забыли пароль?</LinkPage>
        </FormFooter>)
}