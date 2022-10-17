import styled from "styled-components";
import React from "react";
import { idID } from "@mui/material/locale";

const StyledInput = styled.input`
	width: 96%;
	border-radius: 12px;
	height: 40px;
	border: none;
	background-color: ${({theme}) => theme.formField};
	font-size: 16px;
	outline: none;
	padding-left: 4%;
	color: ${({theme}) => theme.text};

	:hover,
	:focus {
		transform: scale(1.05);
	}
`;

const StyledButton = styled.button`
	margin-bottom: 18px;
	margin-top: 26px;
	font-size: 18px;
	font-weight: 600;
	padding: 10px;
	color: white;
	border-radius: 12px;
	border: none;
	outline: none;
	background-color: #ee7500;
	cursor: pointer;
	width: 100%;

	:hover,
	:focus {
		transform: scale(1.05);
	}
`;

const StyledFormHeader = styled.h1`
    text-align: center;
	font-weight: 500;
	margin-bottom: 40px;
	margin-left: auto;
    margin-right: auto;
`;

const StyledFormFooter = styled.h1`
	text-align: center;
	font-weight: 500;
	margin-bottom: 40px;
`;

export const StyledFormContainer = styled.div`
	width: auto;
	height: auto;
	flex-direction: column;
	border: 2px solid #ee7500;
	border-radius: 12px;
	font-size: 18px;
	font-weight: 550;
	padding: 20px 30px;
	box-shadow: 10px 10px 10px 10px ${({theme}) => theme.boxShadow};
	background-color: ${({theme}) => theme.formContainer};
`;

export const Input = ({ labelText, inputProps }) => (
	<>
		<p>{labelText}</p>
		<StyledInput {...inputProps} />
	</>
);

export const Button = (props) => <StyledButton type="submit" {...props} />;

export const FormHeader = ({ children }) => (
	<StyledFormHeader>{children}</StyledFormHeader>
);

export const FormFooter = ({ children }) => (
	<StyledFormFooter>{children}</StyledFormFooter>
);
