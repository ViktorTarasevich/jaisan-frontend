import React, {useState} from 'react';
import styled from 'styled-components';
import {Header} from "../../components/Header/header";
import {Grid} from '../../components/Grid/grid'
import {OrderForm} from "../../components/Order/order-form";
import useDebounce from "../../hooks/useDebounce";
import axios from "axios";

const LandingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-size: cover;
    padding: 0px 10px;
    text-rendering: optimizeSpeed;
    font-size: 10px;
    line-height: 11.72px;
    font-family: "Roboto";
    color: #fff
    `;

const ContentWrap = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Landing = ({theme, logout}) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([])

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

    return (
        <LandingWrapper>
            <Header
                theme={theme}
                handleSearch={handleSearch}
                logout={logout}
            />
            <ContentWrap>
                <Grid results={results}/>
            </ContentWrap>
        </LandingWrapper>
    );
}
