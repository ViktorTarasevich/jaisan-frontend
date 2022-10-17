import styled from "styled-components";
import {StyledButtonWrapper} from "./Theme/button";
import {StyledBackButton} from "./Theme/styledBackButton";

export const GridHeaderWrapper = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    background-color: ${({theme}) => theme.headerTheme};
    border-top-left-radius: ${props => props.headerRadius ? '12px' : '0px'};
    border-top-right-radius: 12px;
    `;

export const GridHeaderTitle = styled.h3`
    color: ${({theme}) => theme.text};
    font-weight: 900;
    font-size: 24px;
    line-height: 21.09px;
    display: flex;
    align-items: center;
    padding: 10px;
    `;

export const CollapseButton = styled(StyledButtonWrapper)`
    position: absolute;
    right: 0;
    margin-right: 20px;
    margin-top: 10px;
    background-color: ${({theme}) => theme.headerIcons};
    `;

export const ToLandingLink = styled(StyledBackButton)`
    margin-left: 10px;
    margin-right: 20px;
    border-radius: 8px;
    position: relative;
`;