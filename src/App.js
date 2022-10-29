import './App.css';
import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
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
import axios from "axios";


const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
};
const {
    LANDING,
    AUTH,
    HISTORY,
    CART,
} = PATHS;

export const App = () => {
    const [videos, setVideos] = useState([]);
    const [theme, setTheme] = useState('light');
    const [isAuth, setIsAuth] = useState(false)
    const [user, setUser] = useState(null)
    const navigate = useNavigate();

    const logout = () => {
        setUser(null)
        setIsAuth(false)
        localStorage.setItem('token', null)
        navigate('/auth')
    }

    const checkAuth = async () => {
        const token = JSON.parse(localStorage.getItem('token'))
        if(!token) return
        const res = await axios.post('http://localhost:7000/api/auth/check-auth',
            {
                token
            })

        if (res.data.token) {
            setUser(parseJwt(res.data.token))
            setIsAuth(true)
            localStorage.setItem('token', JSON.stringify(res.data.token))
        }
    }

    useEffect(async () => {
        // const timer = setTimeout(() => {}, 1000);
        // return () => clearTimeout(timer);
        await checkAuth()



        }, []);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('theme'));
        setTheme(items);
    }, [theme]);
    useEffect(() => {
        console.log(user)
        console.log(isAuth)
    }, [isAuth]);
        return (

        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyles/>
                <Routes>
                    <Route exact path={LANDING} element={<Landing logout={logout} theme={(themeType) => {setTheme(themeType)}}/>}/>
                    {!isAuth && <Route exact path={AUTH} element={<FormLogin setIsAuth={setIsAuth} setUser={setUser} theme={(themeType) => {setTheme(themeType)}}/>}/> }
                    <Route exact path={HISTORY} element={<HistorySale logout={logout} theme={(themeType) => {setTheme(themeType)}}/>}/>
                    <Route exact path={CART} element={<Cart logout={logout} user={user} theme={(themeType) => {setTheme(themeType)}}/>}/>
                    {/*{isAuth && <Route exact path={"*"} element={<Cart theme={(themeType) => {setTheme(themeType)}}/>}/> }*/}
                </Routes>
            </>
        </ThemeProvider>
)}
