import styled from "styled-components";

export const StyledIcon = styled.svg`
	& rect {
		fill: ${({ iconBg }) => iconBg};
	}
	& path {
		fill: ${({ iconColor }) => iconColor};
	}
`;

export const StyledFiledIcon = styled(StyledIcon)`
	& path {
		fill: ${({ iconColor, filled }) => (filled ? iconColor : "transparent")};
		stroke: ${({ iconColor }) => iconColor};
	}
`;

export const StyledStrokedIcon = styled.svg`
	& rect {
		fill: ${({ iconBg }) => iconBg};
	}
	& path {
		stroke: ${({ iconColor }) => iconColor};
	}
`;
