import React from 'react';
import styled from 'styled-components';
import {Header} from "../../components/Header/header";
import {Grid} from '../../components/Grid/grid'
import {OrderForm} from "../../components/Order/order-form";

const LandingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-size: cover;
    padding: 0px 10px;
    text-rendering: optimizeSpeed;
    font-size: 10px;
    line-height: 11.72px;
    font-family: "Roboto";
    color: #fff
    `;

const ContentWrap = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Landing = ({theme}) => {
    return (
        <LandingWrapper>
            <Header theme={theme}/>
            <ContentWrap>
                <Grid/>
            </ContentWrap>
        </LandingWrapper>
    );
}