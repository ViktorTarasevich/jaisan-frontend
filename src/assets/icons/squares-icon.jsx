import {StyledStrokedIcon} from "../../styledComponents/Theme/icon";
import React from "react";

export const SquaresIcon = ({ color }) => (
	<StyledStrokedIcon
		iconColor={color}
		width="30"
		height="30"
		viewBox="0 0 30 30"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M13.2222 7H7V13.2222H13.2222V7Z"
			stroke="#EE7500"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M23 7H16.7778V13.2222H23V7Z"
			stroke="#EE7500"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M23 16.7778H16.7778V23H23V16.7778Z"
			stroke="#EE7500"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M13.2222 16.7778H7V23H13.2222V16.7778Z"
			stroke="#EE7500"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</StyledStrokedIcon>
);
