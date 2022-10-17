import React from "react";
import {SidebarHeader} from "./SidebarHeader/sidebarHeader";
import {SidebarMenu} from "./SidebarMenu/sidebarMenu";
import styled from 'styled-components';


const SideBarWrapper = styled.div`
    width: 226px;
    min-height: 90%;
    background-color: #1a1a1a;
    position: relative;
    float: left;
    margin-right: 10px;
    `;

export const Sidebar = () => {

    return (
        <SideBarWrapper>
            <SidebarHeader/>
            <SidebarMenu/>
        </SideBarWrapper>
    );
};
