import React from "react";
import styled from 'styled-components';
import folder from '../../../assets/images/sidebar/directory-icon.svg'
import fillFolder from '../../../assets/images/sidebar/directory-fill-icon.svg';
import icon from '../../../assets/images/sidebar/file-icon.svg'

const StyledMenuWrapper = styled.div`
    `;

// add pseudo classes to sidebar TopMenu and them children

const SidebarTopMenu = styled.ul`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 5px 15px;
    `;

const SidebarTopMenuGroups = styled.li`
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 5px 15px;
    background-color: #2f2f2f;
    position: relative;
    color: white;
    font-weight: 700;
    font-size: 16px;
    text-decoration: none;
   a {
    color: #fff;
    font-weight: 700;
    font-size: 18px;
    text-decoration: none;
    }
    `;

const SidebarTopMenuBrands = styled.li`
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 5px 15px;
    a {
    color: #fff;
    font-weight: 700;
    font-size: 18px;
    text-decoration: none;
    }
    `;

const SidebarList = styled.ul`
    padding: 12px 11px !important;
    padding-bottom: 35px !important;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    text-decoration: none;
    color: inherit;
    margin-bottom: 8px;
    display: flex;
    width: 13px;
    height: 30px;
    `;

const SidebarItemDirectory = styled.li`
    width: 13px;
    height: 30px;
    margin-left: 30px;
    list-style-image: url(${folder});
    background-size: contain;
    background-repeat: no-repeat;
    padding-bottom: 24px;
    a{
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    text-decoration: none;
    }
    `;


const SidebarItemFile = styled.li`
    content: "";
    width: 13px;
    height: 30px;
    list-style-image: url(${icon});
    padding: 12px 0px;
    margin-left:30px;
    `;

export const SidebarMenu = () => {

    return (
        <StyledMenuWrapper>
            <SidebarTopMenu>
                <SidebarTopMenuGroups>
                    <a>Группы</a></SidebarTopMenuGroups>
                <SidebarTopMenuBrands><a>Бренды</a></SidebarTopMenuBrands>
            </SidebarTopMenu>
            <SidebarList>
                <SidebarItemDirectory><a>Автоаксессуары</a></SidebarItemDirectory>
                <SidebarItemDirectory><a>Автоаксессуары</a></SidebarItemDirectory>
                <SidebarItemDirectory><a>Автоаксессуары</a></SidebarItemDirectory>
                <SidebarItemDirectory><a>Автоаксессуары</a></SidebarItemDirectory>
                <SidebarItemDirectory><a>Автоаксессуары</a></SidebarItemDirectory>
            </SidebarList>
        </StyledMenuWrapper>
    );
};