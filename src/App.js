import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {PATHS} from "./constants";
import {Landing} from "./pages/Landing/landing";
import {FormLogin} from "./pages/Authentication/formLogin";
import HistorySale from "./pages/historySales/history-sale";
import Cart from "./pages/Cart/cart";
import { useState } from 'react';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styledComponents/theme';
import { GlobalStyles } from './styledComponents/global-styles';
import {useDarkMode} from './hooks/useDarkMode'



const {
    LANDING,
    AUTH,
    HISTORY,
    CART,
} = PATHS;

export const App = () => {
    const [videos, setVideos] = useState([]);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const timer = setTimeout(() => {}, 1000);
        return () => clearTimeout(timer);

        }, []);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('theme'));
        setTheme(items);
    }, [theme]);
    
        return (
            
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyles/>
                <Routes>
                    <Route exact path={LANDING} element={<Landing theme={(themeType) => {setTheme(themeType)}}/>}/>
                    <Route exact path={AUTH} element={<FormLogin  theme={(themeType) => {setTheme(themeType)}}/>}/>
                    <Route exact path={HISTORY} element={<HistorySale theme={(themeType) => {setTheme(themeType)}}/>}/>
                    <Route exact path={CART} element={<Cart theme={(themeType) => {setTheme(themeType)}}/>}/>
                </Routes>
            </>
        </ThemeProvider>
)}
