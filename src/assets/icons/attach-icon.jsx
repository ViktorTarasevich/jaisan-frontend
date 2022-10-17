import {StyledStrokedIcon} from "../../styledComponents/Theme/icon";
import React from "react";

export const AttachIcon = ({ bg, color }) => (
	<StyledStrokedIcon
		iconBg={bg}
		iconColor={color}
		width="30"
		height="30"
		viewBox="0 0 30 30"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect width="30" height="30" rx="5" fill="#F9F9F9" />
		<path
			d="M23 14.5008L15.4356 21.635C14.5089 22.509 13.252 23 11.9414 23C10.6309 23 9.37401 22.509 8.44731 21.635C7.52061 20.761 7 19.5756 7 18.3396C7 17.1036 7.52061 15.9182 8.44731 15.0442L16.0117 7.91C16.6295 7.32734 17.4675 7 18.3412 7C19.2149 7 20.0528 7.32734 20.6706 7.91C21.2884 8.49266 21.6355 9.28292 21.6355 10.1069C21.6355 10.9309 21.2884 11.7212 20.6706 12.3039L13.0979 19.4381C12.789 19.7294 12.3701 19.8931 11.9332 19.8931C11.4964 19.8931 11.0774 19.7294 10.7685 19.4381C10.4596 19.1467 10.2861 18.7516 10.2861 18.3396C10.2861 17.9276 10.4596 17.5325 10.7685 17.2411L17.7568 10.6581"
			stroke="#EE7500"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</StyledStrokedIcon>
);
