import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import SideBar from './productSideBar'
import ProductInfo from "./productInfo";

const ProductWrapper = styled.div`
display:flex;
flex-direction: row;
height: 500px;
background: ${({theme}) => theme.headerTheme};
border-radius: 14px;
margin-top: 10px;
`;

function  Product ({product}) {

    const [indexTab, setIndexTab] = useState(0);

    useEffect( () => {
        console.log(indexTab);
    }, [indexTab])

    return (
        <ProductWrapper>
            <SideBar tabHandler={(index) => setIndexTab(index)} tabIndex={indexTab}/>
            <ProductInfo product={product} tabIndex={indexTab}/>
        </ProductWrapper>
    );
}

export default Product;