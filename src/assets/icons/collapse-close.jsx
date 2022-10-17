import {StyledFiledIcon} from "../../styledComponents/Theme/icon";
import React from "react";

export const CollapseClose = ({bg, color, size}) => (
    <StyledFiledIcon
        iconBg={bg}
        iconColor={color}
        width={size}
        height={size}
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect width="30" height="30" rx="5" fill="#2F2F2F"/>
        <path
            d="M11 7.66667L11 11.6667C11 12.0203 10.8595 12.3594 10.6095 12.6095C10.3594 12.8595 10.0203 13 9.66667 13L2.33333 13C1.97971 13 1.64057 12.8595 1.39052 12.6095C1.14048 12.3594 1 12.0203 1 11.6667L1 4.33333C1 3.97971 1.14048 3.64057 1.39052 3.39052C1.64057 3.14048 1.97971 3 2.33333 3L6.33333 3M9 1L13 1M13 1V5M13 1L5.66667 8.33333"
            fill="#EE7500"/>
    </StyledFiledIcon>
);
