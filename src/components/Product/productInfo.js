import React from "react";
import ProductTable from "./productTable";
import styled from 'styled-components';
import {GridHeader} from "../Atomic/gridHeader";

const ProductInfoWrapper = styled.div`
display: flex;
flex-direction: column;
width: 82%;
height: auto;
background: ${({theme}) => theme.options};
`;

function  ProductInfo ({product, tabIndex}) {
    return (
        <ProductInfoWrapper>
            <GridHeader title={product.name} headerRadius={false}/>
            <ProductTable product={product} tabIndex={tabIndex} />
        </ProductInfoWrapper>
    );
}

export default ProductInfo;