import React from "react";
import {
    CollapseOpen
} from "../../assets/icons";
import {CollapseButton, ProductHeaderWrapper, ProductName} from "../../styledComponents/Product/product-header";

function ProductHeader({name}) {

    return (
        <ProductHeaderWrapper>
            <ProductName>{name}</ProductName>
            <CollapseButton>
                <CollapseOpen  bg='none' color='#EE7500' size={34}/>
            </CollapseButton>
        </ProductHeaderWrapper>
    );
}

export default ProductHeader;