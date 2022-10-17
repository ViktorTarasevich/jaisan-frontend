import React from "react";
import styled from 'styled-components';
import battery from '../../assets/mockImg/battery.png'
import {HeaderSidebar, ProductImage, ProductSidebarWrapper} from "../../styledComponents/Product/product-sidebar";
import ListItem from "@material-ui/core/ListItem";

const ProductMenu = styled.div``;

const ListButton = styled.li`
    padding: 20px 100px 20px 20px;
    margin-top: 20px;
    list-style: none;
    font-size: 16px;
    cursor: pointer;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    background-color: ${({active}) => active ? ({theme}) => theme.activeOption : ({theme}) => 'none'};
    color: ${({theme}) => theme.text};

    :hover{
        background-color: ${({theme})=> theme.activeOption};
    }
`;

const menuList = ["Описание", "Применимость", "Аналоги"];

function  ProductSidebar ({tabHandler, tabIndex}) {

    return (
        <ProductSidebarWrapper>
            <HeaderSidebar>
                <ProductImage src={battery}/>
            </HeaderSidebar>
            <ProductMenu>
                <ul>
                    {
                        menuList.map((item, i) => <ListButton active={i === tabIndex} onClick={() => tabHandler(i)}>{item}</ListButton>)
                    }
                </ul>
            </ProductMenu>
        </ProductSidebarWrapper>
    );
}

export default ProductSidebar;