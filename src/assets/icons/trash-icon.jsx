import {StyledFiledIcon} from "../../styledComponents/Theme/icon";
import React from "react";

export const TrashIcon = ({color, filled, size}) => (
    <StyledFiledIcon
        iconColor={color}
        filled={filled}
        width={size}
        height={size}
        viewBox="0 0 29 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M9.5 11.4H10.6111M10.6111 11.4H19.5M10.6111 11.4V19.8C10.6111 20.1183 10.7282 20.4235 10.9365 20.6485C11.1449 20.8736 11.4275 21 11.7222 21H17.2778C17.5725 21 17.8551 20.8736 18.0635 20.6485C18.2718 20.4235 18.3889 20.1183 18.3889 19.8V11.4H10.6111ZM12.2778 11.4V10.2C12.2778 9.88174 12.3948 9.57652 12.6032 9.35147C12.8116 9.12643 13.0942 9 13.3889 9H15.6111C15.9058 9 16.1884 9.12643 16.3968 9.35147C16.6052 9.57652 16.7222 9.88174 16.7222 10.2V11.4"
            stroke="#EE7500"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </StyledFiledIcon>
);
