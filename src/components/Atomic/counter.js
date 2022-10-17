import React, {useState} from "react";
import styled from 'styled-components';

const CounterWrapper = styled.div`
    `;

const CounterButton = styled.span`
    height: 100px; 
    width: 20px;
    color: #EE7500;
    font-weight: 500;
    font-size: 26px;
    vertical-align: sub;
    cursor: pointer;
    `;

const CounterNumber = styled.input`
    width: 20px;
    text-align: center;
    font-size: 22px;
    background-color: inherit;
    border:0px;
    color: ${({theme}) => theme.text };
    display: inline-block;
    vertical-align: center;
    margin: 0px 18px;
    outline: none;
    `;


export default function Counter({inStock}) {

    const [field, setValue] = useState(1);

    const setNumber = ({target}) => {
        if (target.classList.contains('decrease') && field > 1) {
            setValue(field - 1);
        } else if (target.classList.contains("increase") && field < inStock) {
            setValue(field + 1);
        }
    };

    return (
        <CounterWrapper onClick={setNumber}>
            <CounterButton className='decrease'>-</CounterButton>
            <CounterNumber className='field' onChange={e => setValue(e.target.value)} value={field} disabled="disabled"/>
            <CounterButton className='increase'>+</CounterButton>
        </CounterWrapper>
    );
}
