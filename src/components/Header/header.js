import React, {useCallback, useState} from "react";
import axios from "axios";
import {NavLink} from 'react-router-dom';
import {API_BASE_URL, PATHS} from "../../constants";
import Tumbler from "../Atomic/tumbler";
import debounce from 'lodash.debounce';
import {
    LogoIcon,
    PhoneIcon,
    ProfileIcon,
    BellIcon,
    CartIcon,
    SearchIcon,
    ExitIcon,
} from "../../assets/icons";
import {
    HeaderAlertsButton, HeaderCartButton, HeaderExitButton, HeaderLabelSwitch,
    HeaderLogo,
    HeaderLogoLink, HeaderPhoneButton, HeaderSearchWrap,
    HeaderTitle,
    HeaderTitleDescription,
    HeaderTitleWrap, HeaderUserButton,
    HeaderWrap, SearchButton, SearchInput
} from "../../styledComponents/header";
import useDebounce from "../../hooks/useDebounce"

const {
    LANDING,
    AUTH,
    CART,
    HISTORY
} = PATHS;

export const Header = ({theme, handleSearch, logout}) => {

    const setActive = ({isActive}) => (isActive ? " active" : "");


    return (
        <HeaderWrap>
            <HeaderLogo>
                <HeaderLogoLink to={LANDING}>
                    <LogoIcon color='#EE7500'/>
                </HeaderLogoLink>
            </HeaderLogo>
            {/*<HeaderTitleWrap>*/}
            {/*    <HeaderTitle>AutoSet</HeaderTitle>*/}
            {/*    <HeaderTitleDescription>Автозапчасти в Беларуси</HeaderTitleDescription>*/}
            {/*</HeaderTitleWrap>*/}
                <a href="tel:+375290000000">
                    <PhoneIcon color='#EE7500' size={34}/>
                </a>
            <HeaderSearchWrap>
                <SearchButton type="button">
                    <SearchIcon color='#EE7500' size={34}/>
                </SearchButton>
                <SearchInput type="search" placeholder="Поиск..." name="search" onChange={handleSearch}/>
            </HeaderSearchWrap>
            <HeaderAlertsButton>
                <BellIcon color='#EE7500' size={34}/>
            </HeaderAlertsButton>
            <HeaderCartButton>
                <NavLink to={CART} className={setActive}>
                    <CartIcon color='#EE7500' size={34}/>
                </NavLink>
            </HeaderCartButton>
            <HeaderUserButton>
                <NavLink to={AUTH} className={setActive}>
                    <ProfileIcon color='#EE7500' size={34}/>
                </NavLink>
            </HeaderUserButton>
            <HeaderExitButton onClick={logout}>
                {/*<NavLink to={HISTORY}>*/}
                    <ExitIcon color='#EE7500' size={34}/>
                {/*</NavLink>*/}
            </HeaderExitButton>
            <HeaderLabelSwitch className="switch">
                <Tumbler theme={theme}/>
            </HeaderLabelSwitch>
        </HeaderWrap>
    );
};
