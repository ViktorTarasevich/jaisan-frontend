import styled from "styled-components";
import {StyledButtonWrapper} from "../Theme/button";

export const ProductHeaderWrapper = styled.div`
    height: 60px;
    display:flex;
    flex-direction: row;
    background: black;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
`;


export const ProductName = styled.h1`
    color: white;
    font-weight: 800;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`;

export const CollapseButton = styled(StyledButtonWrapper)`
    right: 0;
    position: absolute;
    margin-right: 20px;
    margin-top: 6px;
    background-color: black;

`;