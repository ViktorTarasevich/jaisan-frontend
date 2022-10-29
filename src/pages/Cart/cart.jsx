import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import {Header} from "../../components/Header/header";
import GridCart from "./grid-cart";
import {OrderForm} from "../../components/Order/order-form";
import {useApi} from "../../hooks/useApi";

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

const ContentWrap = styled.div`
    display: flex;
    flex-direction: row;
    flex: 2 100%;
`;

const GridWrapper = styled.div`
    flex: 2 100%;
`;


export default function Cart({theme, user, logout}) {
    const {data, loaded} = useApi("/cart", "GET");
    const [tableAvailableHeight, setTableAvailableHeight] = useState();

    useEffect(() => {
        const headerHeight =
            document.querySelector(".header-height-ref")?.clientHeight;
        const availableHeight = document.querySelector(
            ".available-height-ref"
        )?.clientHeight;

        if (headerHeight && availableHeight) {
            setTableAvailableHeight(availableHeight - headerHeight - 52);
            console.log(tableAvailableHeight);
        }
    }, [data]);

    return (
        <CartWrapper>
            <Header theme={theme} logout={logout}/>
            <ContentWrap>
                <OrderForm data={data || []} user={user}/>
                <GridWrapper>
                    <GridCart rows={data || []} loaded={!loaded} height={tableAvailableHeight || 760}/>
                </GridWrapper>
            </ContentWrap>
        </CartWrapper>
    );
}
