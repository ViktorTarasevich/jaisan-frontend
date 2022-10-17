import React from "react";
import {StyledIcon} from "../../styledComponents/Theme/icon";

export const ArrowLeftIcon = ({ bg, color, size }) => (
	<StyledIcon
		iconColor={color}
		iconBg={bg}
		width={size}
		height={size}
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect width="16" height="16" rx="3" />
		<path
			d="M9.64645 12.3536C9.84171 12.5488 10.1583 12.5488 10.3536 12.3536C10.5488 12.1583 10.5488 11.8417 10.3536 11.6464L9.64645 12.3536ZM6 8L5.64645 7.64645C5.45118 7.84171 5.45118 8.15829 5.64645 8.35355L6 8ZM10.3536 4.35355C10.5488 4.15829 10.5488 3.84171 10.3536 3.64645C10.1583 3.45118 9.84171 3.45118 9.64645 3.64645L10.3536 4.35355ZM10.3536 11.6464L6.35355 7.64645L5.64645 8.35355L9.64645 12.3536L10.3536 11.6464ZM6.35355 8.35355L10.3536 4.35355L9.64645 3.64645L5.64645 7.64645L6.35355 8.35355Z"
			fill="white"
		/>
	</StyledIcon>
);
