import React from "react";
import styled from 'styled-components';
import {StyledButtonWrapper} from "../../styledComponents/Theme/button";
import {
    CollapseOpen,
    ArrowRightIcon
} from "../../assets/icons";

const GridHeaderWrapper = styled.div`
    display: flex;
    height: auto;
    background-color: ${({theme}) => theme.headerTheme};
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    padding: 6px;
    `;

const GridHeaderTitle = styled.h3`
    color: ${({theme}) => theme.text};
    font-weight: 900;
    font-size: 24px;
    line-height: 21.09px;
    display: flex;
    align-items: center;
    padding: 10px;
     `;

const CollapseButton = styled(StyledButtonWrapper)`
    position: absolute;
    right: 0;
    margin-right: 20px;
    margin-top: 10px;
    background-color: ${({theme}) => theme.headerTheme};
    `;

const HeaderContentWrapper = styled.div`
    width: 40%;
    right: 0;
    position: absolute;
    margin-right: 10%;

`;

const TopInputField = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

`;

const BottomInputField = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const HeaderInput = styled.input`
    width: 60px;
    height: 30px;
    border-radius: 6px;
    background-color: ${({theme}) => theme.searchField};
    outline: none;
    color: ${({theme}) => theme.text};
    padding-left: 1%;
    border: ${({theme}) => theme.searchField};
    outline: none;
    cursor: pointer;
    :hover,
	:focus {
		transform: scale(1.05);
	}
`;

const HeaderText = styled.p`
    margin-right: 10px;
    margin-left: 10px;
    font-size: 0.8vw;
    font-family: "Roboto";
    color: ${({theme}) => theme.text};
`;

const SubmitButton = styled.button`
    width: 17%;
    height: 40px;
    margin-left: 10px;
    padding: 10px 20px;
    border-radius: 8px;
    background-color: #EE7500;
    border: #EE7500;
    color: white;
    font-family: "Roboto";
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
`;

const ArrowContainer = styled.div`
    margin-left: 4px;
    margin-top: 0.5%;
`;


export const CartHeader = ({title}) => {

    return (
        <GridHeaderWrapper>
            <GridHeaderTitle>
                {title}
            </GridHeaderTitle>
            <HeaderContentWrapper>
                <TopInputField>
                    <HeaderText>Оптовая цена от&ensp;&ensp;</HeaderText>
                    <HeaderInput type='number'/>
                    <HeaderText>до</HeaderText>
                    <HeaderInput type='number'/>
                    <ArrowContainer>
                        <ArrowRightIcon bg='none' color='#EE7500' size={30}/>
                    </ArrowContainer>
                    <HeaderText>Формировать цены</HeaderText>
                </TopInputField>
                <BottomInputField>
                    <HeaderText>Процент надбавки</HeaderText>
                    <HeaderInput type='number'/>
                    <SubmitButton>Сохранить</SubmitButton>
                </BottomInputField>
            </HeaderContentWrapper>
            <CollapseButton>
                <CollapseOpen color='#EE7500' bg='none' size={34}/>
            </CollapseButton>
        </GridHeaderWrapper>
    );
};