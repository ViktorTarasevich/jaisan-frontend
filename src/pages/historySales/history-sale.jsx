import React from "react";
import styled from 'styled-components';
import {Header} from "../../components/Header/header";
import {HistoryTable} from "./history-table";

const CartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-position: 100% 100%;
    padding: 0px 10px;
    text-rendering: optimizeSpeed;
    background-color: ${({theme}) => theme.body};
    font-size: 10px;
    line-height: 11.72px;
    font-family: "Roboto";
    color: #fff
    `;

const StyledFooter = styled.div`
    background: ${({theme}) => theme.headerTheme};
    height: 100px;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
`;



export default function HistorySale({theme, logout}) {

    return (
        <CartWrapper>
            <Header theme={theme} logout={logout}/>
            <HistoryTable/>
            <StyledFooter/>
        </CartWrapper>
    );
}
