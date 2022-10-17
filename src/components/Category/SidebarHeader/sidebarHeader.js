import React from "react";
import styled from 'styled-components';
import { StyledButtonWrapper } from "../../../styledComponents/Theme/button";
import Icons from "../../../index";

const SidebarHeaderWrapper = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: space-around;
    margin-bottom: 20px;
    `;

const SidebarTitle = styled.h3`
    color: #fff;
    font-weight: 700;
    font-size: 18px;
    line-height: 21.09px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    `;

const FavoritesButton = styled(StyledButtonWrapper)`
    `;

const CollapseButton = styled(StyledButtonWrapper)``;

export const SidebarHeader = () => {

    return (
        <SidebarHeaderWrapper>
            <SidebarTitle>Категории</SidebarTitle>
            <FavoritesButton>
                <Icons
                    name='favorites'
                    size='18'
                />
            </FavoritesButton>
            <CollapseButton className="btn">
                <Icons
                    name='collapse'
                    size='18'
                />
            </CollapseButton>
        </SidebarHeaderWrapper>
    );
};
