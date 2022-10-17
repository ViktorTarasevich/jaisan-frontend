import {StyledStrokedIcon} from "../../styledComponents/Theme/icon";
import React from "react";

export const HideIcon = ({ color }) => (
	<StyledStrokedIcon
		iconColor={color}
		width="12"
		height="9"
		viewBox="0 0 12 9"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M1 4.5C1 4.5 2.81818 0.5 6 0.5C9.18182 0.5 11 4.5 11 4.5C11 4.5 9.18182 8.5 6 8.5C2.81818 8.5 1 4.5 1 4.5Z"
			stroke="black"
			strokeOpacity="0.4"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M6 6C6.75312 6 7.36364 5.32843 7.36364 4.5C7.36364 3.67157 6.75312 3 6 3C5.24688 3 4.63636 3.67157 4.63636 4.5C4.63636 5.32843 5.24688 6 6 6Z"
			stroke="black"
			strokeOpacity="0.4"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</StyledStrokedIcon>
);
