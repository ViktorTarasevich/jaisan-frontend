import styled from "styled-components";

export const StyledToCartLabelConteiner = styled.div`
	position: absolute;
	height: 50px;
	width: 80%;
	z-index: 99;
	bottom: 80px;
	left: 50%;
	transform: translate(-50%, 0);

	background: ${({theme}) => theme.toCart};
	border: ${({theme}) => theme.headerTheme};
	border-radius: 5px;
	padding: 0px 25px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const StyledButton = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 9px 14px;
	gap: 5px;
	background: #ee7500;

	box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25), 0px -2px 6px rgba(0, 0, 0, 0.2);
	border-radius: 5px;

	font-family: "Roboto";
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 16px;

	color: #ffffff;
	border: none;
	cursor: pointer;
`;

export const StyleLabelText = styled.span`
	display: block;

	font-family: "Roboto";
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;

	color: ${({theme}) => theme.text};
`;

export const StyledLabelConteiner = styled.div`
	display: flex;
	align-items: end;
	gap: 5px;
`;

export const StyledNumber = styled.span`
	display: block;
	font-family: "Roboto";
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 21px;

	color: #ee7500;

	&:after {
		font-family: "Roboto";
		font-style: normal;
		font-weight: 400;
		font-size: 10px;
		line-height: 12px;
		color: #ffffff;
		margin-left: 3px;
	}
`;

export const StyledNumberCount = styled(StyledNumber)`
	&:after {
		content: "шт.";
		color: ${({theme}) => theme.text};
	}
`;

export const StyledNumberPrice = styled(StyledNumber)`
	&:after {
		content: "BYN.";
		color: ${({theme}) => theme.text};
	}
`;