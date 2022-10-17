import { StyledIcon} from "../../styledComponents/Theme/icon";
import React from "react";

export const ArrowRightIcon = ({ bg, color, size }) => (
	<StyledIcon
		iconColor={color}
		iconBg={bg}
		width={size}
		height={size}
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect
			x="16"
			y="16"
			width="16"
			height="16"
			rx="3"
			transform="rotate(-180 16 16)"
			fill="#EE7500"
		/>
		<path
			d="M6.35355 3.64645C6.15829 3.45118 5.84171 3.45118 5.64645 3.64645C5.45118 3.84171 5.45118 4.15829 5.64645 4.35355L6.35355 3.64645ZM10 8L10.3536 8.35355C10.5488 8.15829 10.5488 7.84171 10.3536 7.64645L10 8ZM5.64645 11.6464C5.45118 11.8417 5.45118 12.1583 5.64645 12.3536C5.84171 12.5488 6.15829 12.5488 6.35355 12.3536L5.64645 11.6464ZM5.64645 4.35355L9.64645 8.35355L10.3536 7.64645L6.35355 3.64645L5.64645 4.35355ZM9.64645 7.64645L5.64645 11.6464L6.35355 12.3536L10.3536 8.35355L9.64645 7.64645Z"
			fill="white"
		/>
	</StyledIcon>
);
