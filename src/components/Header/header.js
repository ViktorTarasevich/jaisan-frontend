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

export const Header = ({theme}) => {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([])
    const setActive = ({isActive}) => (isActive ? " active" : "");

    useDebounce(async () => {
        if(query.trim().length === 0) {
            return setResults([])
        }
        const res = await axios.post(`http://localhost:5000/search`,{
            query
        })
        if(res.status === 200) {
            setResults(res.data)
            console.log('complete')
        }
      }, [query], 800);

    const handleSearch = (e) => setQuery(e.target.value);
    const searchResults = results.map(r => {
        const { article } = r
        return <div style={{padding: '10px', marginTop: '5px'}} key={article.id}> {article.name}</div>
    })

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
                {searchResults.length > 0 ? <div style={{overflow: 'auto', backgroundColor: 'black', color: 'white', display: 'flex', flexDirection: 'column', position: 'absolute', top: '0', left: '40%', height: '400px', width: '500px'}}>{ searchResults }</div> : null }
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
            <HeaderExitButton>
                <NavLink to={HISTORY}>
                    <ExitIcon color='#EE7500' size={34}/>
                </NavLink>
            </HeaderExitButton>
            <HeaderLabelSwitch className="switch">
                <Tumbler theme={theme}/>
            </HeaderLabelSwitch>
        </HeaderWrap>
    );
};
