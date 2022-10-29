import {AuthFormContainer} from "./containers/auth-form";
import {Button, FormHeader, Input} from "./styled/form";
import styled from "styled-components";
import React from "react";
import {Header} from "../../components/Header/header";
import {HeaderWrapper} from "./containers/module-wrapper/headerWrapper";
import {FooterWrapper} from "./containers/module-wrapper/footerWrapper";

const StyledContent = styled.div`
	display: flex;
	margin-top: 6%;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const PageWrapper = styled.div`
    height: 100vh;
	background-position: 100% 100%;
	padding: 0px 10px;
	text-rendering: optimizeSpeed;
	background-color: ${({theme}) => theme.body};
	font-size: 10px;
	line-height: 11.72px;
	color: ${({theme}) => theme.text};
`

const HeaderContainer = styled.div`
display:flex;
flex-direction: row;
justify-content: flex-start;
`;

export const FormLogin = ({theme, setIsAuth, setUser}) => {

    const SIGN_IN_MODE = 0;
    const SIGN_UP_MODE = 1;
    const RESET_MODE = 2;

    return (
        <PageWrapper>
            <Header theme={theme}/>
            <StyledContent>
                    <AuthFormContainer
                        setIsAuth={setIsAuth}
                        setUser={setUser}
                        renderHeader={(mode, {activeModeIndex}) => {
                            switch (activeModeIndex) {
                                case SIGN_IN_MODE:
                                    return (
                                        <HeaderContainer>
                                            <FormHeader>
                                                {mode}
                                            </FormHeader>
                                        </HeaderContainer>
                                    )
                                case SIGN_UP_MODE:
                                    return (<HeaderWrapper toPage={SIGN_IN_MODE} mode={mode} />)
                                case RESET_MODE:
                                    return (<HeaderWrapper toPage={SIGN_IN_MODE} mode={mode} />)
                                default:
                                    return <></>
                            }
                        }}
                        renderFooter={({activeModeIndex, setSignUpMode, setRestoreMode}) => {
                            switch (activeModeIndex) {
                                case SIGN_IN_MODE:
                                    return (<FooterWrapper setSignUpMode={setSignUpMode} setRestoreMode={setRestoreMode} />)
                                default:
                                    return <></>
                            }
                        }}
                        inputComponent={Input}
                        buttonComponent={Button}
                    />
            </StyledContent>
        </PageWrapper>
    );
}

