import styled from "styled-components";
import {Link} from "react-router-dom";
import {StyledButtonWrapper} from "./Theme/button";

export const HeaderWrap = styled.header`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    height: 60px;
    border-radius: 12px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 10px;
    background-color:${({theme}) => theme.headerTheme};
    `;

export const HeaderLogo = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    `;

export const HeaderLogoLink = styled(Link)`
    outline: none;
    :hover,:focus{
    transform: scale(1.1);    
    }
`;

export const HeaderTitleWrap = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-left: 10px;
    `;

export const HeaderTitle = styled.span`
    font-weight: 800;
    margin-bottom: 5px;
    font-size: 14px;
    color: ${({theme}) => theme.text};
    `;

export const HeaderTitleDescription = styled.span`
    font-weight: 600;
    font-size: 14px;
    color: ${({theme}) => theme.text};
    `;

export const HeaderPhoneButton = styled(StyledButtonWrapper)`
    margin-left: 20px;
    `;

export const HeaderSearchWrap = styled.form`
    background-color: ${({theme}) => theme.searchField};
    border-radius: 10px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 39%;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    padding: 6px 10px;
    margin-left: 20px;
    position: relative;
    z-index: 1;
    `;

export const SearchButton = styled.button`
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    cursor: pointer;
    width: 30px;
    height: 30px;
    background-color: ${({theme}) => theme.searchButton};
    -webkit-transition: .2s;
    transition: .2s;
    outline: none;
    border: none;
    border-radius: 5px;
    z-index: 1;
    text-decoration: none;
    color: inherit;
    `;

export const SearchInput = styled.input`
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    margin-left: -30px;
    color: ${({theme}) => theme.text};
    height: 30px;
    padding-left: 39px;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: ${({theme}) => theme.searchInput};
    -webkit-box-shadow: 0px 4px 4px 0px #00000040;
    box-shadow: 0px 4px 4px 0px #00000040;
    `;

export const HeaderAlertsButton = styled(StyledButtonWrapper)`
    margin-left: auto;
    `;

export const HeaderCartButton = styled(StyledButtonWrapper)`
    margin-left: 20px;
    `;

export const HeaderUserButton = styled(StyledButtonWrapper)`
`;

export const HeaderExitButton = styled(StyledButtonWrapper)``;

export const HeaderLabelSwitch = styled.label`
    position: relative;
    display: inline-block;
    width: 40px;
    height: 36px;
    margin-left: 20px;
    margin-right: 20px;
    input {
      display:none;
    }
    `;
