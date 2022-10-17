import React, { useState } from "react";
import { StyledFormContainer } from "../../styled/form";
import { SignInFormContainer } from "./signin";
import {SignUpFormContainer} from "./signup";
import {ResetPassword} from "./reset-password";

const SIGN_IN_MODE = 0;
const SIGN_UP_MODE = 1;
const RESTORE_MODE = 2;

export const AuthFormContainer = ({
	renderHeader,
	renderFooter,
	inputComponent,
	buttonComponent,
}) => {

	const modes = ['Авторизация', 'Регистрация', 'Восстановление пароля'];
	const [activeModeIndex, setActiveModeIndex] = useState(SIGN_IN_MODE);
	const setSignInMode = () => setActiveModeIndex(SIGN_IN_MODE);
	const setSignUpMode = () => setActiveModeIndex(SIGN_UP_MODE);
	const setRestoreMode = () => setActiveModeIndex(RESTORE_MODE);

	const renderForm = () => {
		const props = {
			inputComponent,
			buttonComponent,
		};
		switch (activeModeIndex) {
			case SIGN_IN_MODE:
				return <SignInFormContainer {...props} />;
			case SIGN_UP_MODE:
				return <SignUpFormContainer {...props} />;
			case RESTORE_MODE:
				return <ResetPassword {...props} />;
			default:
				return <SignInFormContainer {...props} />;
		}
	};

	return (
		<StyledFormContainer>
			{renderHeader(modes[activeModeIndex], {activeModeIndex})}
			{renderForm()}
			{renderFooter({activeModeIndex, setSignUpMode, setRestoreMode, setSignInMode})}
		</StyledFormContainer>
	);
};
