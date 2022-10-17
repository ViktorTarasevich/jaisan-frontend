import * as Styled from "../../styledComponents/DataGrid/to-cart-label";
import {CartIcon, FavoriteIcon} from "../../assets/icons";
import React, {useEffect} from "react";
import {API_BASE_URL, PATHS} from "../../constants";
import axios from "axios";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const {
    CART
} = PATHS;

export const ToCartLabel = ({countSelected, resultPrice, productList}) => {

    const notify = async () => {
        const res = await axios.post(`${API_BASE_URL}/cart`, productList).catch(e => {
            console.log(e);
        })
        console.log(res?.status);
        if (res.status === 200) {
            toast.success("Success !", {
                pauseOnFocusLoss: false,
                position: toast.POSITION.TOP_RIGHT,
                progressClassName: 'fancy-progress-bar'
            });
        } else {
            toast.error("error !", {
                pauseOnFocusLoss: false,
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    }


    return (
        <Styled.StyledToCartLabelConteiner>
            <div style={{gap: 40, display: "flex"}}>
                <Styled.StyledLabelConteiner>
                    <Styled.StyleLabelText>Товаров выбрано:</Styled.StyleLabelText>
                    <Styled.StyledNumberCount>{countSelected}</Styled.StyledNumberCount>
                </Styled.StyledLabelConteiner>
                <Styled.StyledLabelConteiner>
                    <Styled.StyleLabelText>Сумма всего:</Styled.StyleLabelText>
                    <Styled.StyledNumberPrice>
                        {resultPrice.toLocaleString("ru")}
                    </Styled.StyledNumberPrice>
                </Styled.StyledLabelConteiner>
            </div>
            <div style={{
                display: "flex", alignItems: "center", gap: 20,
            }}>
                <Styled.StyledButton onClick={notify}>
                    В корзину
                    <CartIcon color={"white"} size={22} bg={"transparent"}/>
                </Styled.StyledButton>
                <FavoriteIcon color={"#EE7500"} size={30}/>
            </div>
        </Styled.StyledToCartLabelConteiner>
    )
};