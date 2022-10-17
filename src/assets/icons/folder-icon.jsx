import { StyledFiledIcon } from "../../styledComponents/Theme/icon";
import React from "react";

export const FolderIcon = ({ color, filled }) => (
	<StyledFiledIcon
		iconColor={color}
		filled={filled}
		width="23"
		height="22"
		viewBox="0 0 23 22"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g filter="url(#filter0_d_501_10135)">
			<path
				d="M18 11.7778C18 12.1019 17.863 12.4128 17.6192 12.642C17.3754 12.8712 17.0448 13 16.7 13H6.3C5.95522 13 5.62456 12.8712 5.38076 12.642C5.13696 12.4128 5 12.1019 5 11.7778V3.22222C5 2.89807 5.13696 2.58719 5.38076 2.35798C5.62456 2.12877 5.95522 2 6.3 2H9.55L10.85 3.83333H16.7C17.0448 3.83333 17.3754 3.9621 17.6192 4.19131C17.863 4.42053 18 4.7314 18 5.05556V11.7778Z"
				fill="#EE7500"
			/>
			<path
				d="M18 11.7778C18 12.1019 17.863 12.4128 17.6192 12.642C17.3754 12.8712 17.0448 13 16.7 13H6.3C5.95522 13 5.62456 12.8712 5.38076 12.642C5.13696 12.4128 5 12.1019 5 11.7778V3.22222C5 2.89807 5.13696 2.58719 5.38076 2.35798C5.62456 2.12877 5.95522 2 6.3 2H9.55L10.85 3.83333H16.7C17.0448 3.83333 17.3754 3.9621 17.6192 4.19131C17.863 4.42053 18 4.7314 18 5.05556V11.7778Z"
				stroke="#EE7500"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</g>
		<defs>
			<filter
				id="filter0_d_501_10135"
				x="0.5"
				y="1.5"
				width="22"
				height="20"
				filterUnits="userSpaceOnUse"
				colorInterpolationFilters="sRGB"
			>
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset dy="4" />
				<feGaussianBlur stdDeviation="2" />
				<feComposite in2="hardAlpha" operator="out" />
				<feColorMatrix
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
				/>
				<feBlend
					mode="normal"
					in2="BackgroundImageFix"
					result="effect1_dropShadow_501_10135"
				/>
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="effect1_dropShadow_501_10135"
					result="shape"
				/>
			</filter>
		</defs>
	</StyledFiledIcon>
);
