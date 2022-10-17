import React from 'react'
import {
    DoubleArrowsLeftIcon,
    DoubleArrowsRightIcon,
    Arrow
  
  } from "../../assets/icons";
import styled from 'styled-components';


const PaginationContainer = styled.div`
display: flex;
justify-content: space-between;
background: #1A1A1A;
height: 24px;
`;
const PaginationContainerItem = styled.div`

`;
const ArrowContainer = styled.div`
display: flex;
`;
const PaginationInfoTitles = styled.h5`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 8px;
line-height: 9px;
`;

const ArrowContainerItem = styled.div`
display: flex;
`;
const DoubleArrowsContainer = styled.div`
margin-top: 9px;
`;
const ArrowContainerPosition = styled.div`
margin-top: -16px;
margin-left: 18px;
margin-right: 5px;
`;
const DoubleArrowsRightContainer = styled.div`
display: flex;
`;
const RightArrowsContainer = styled.div`

`;
const ArrowReverse = styled.div`
margin-top: 11px;
transform: rotate(-180deg);
margin-top: 14px;
`;
const RightArrowsItemsWraper = styled.div`
display: flex;
height: 12px;
margin-top: 9px;
margin-left: 6px;
margin-right: 23px
`;

function PaginationBar() {
  return (
    <>
    <PaginationContainer>
        <PaginationContainerItem>
        <PaginationInfoTitles>Сделано в insaitika group</PaginationInfoTitles>
        </PaginationContainerItem>
        <PaginationContainerItem>
            <ArrowContainer>
                <ArrowContainerItem>
                <RightArrowsContainer>
                    <DoubleArrowsContainer>
                    <DoubleArrowsLeftIcon/>
                    </DoubleArrowsContainer>
                    <ArrowContainerPosition>
                    <Arrow/>
                    </ArrowContainerPosition>
            
            </RightArrowsContainer>
            <p>100</p>
            <RightArrowsItemsWraper>
            <ArrowReverse>
            <Arrow/>
                </ArrowReverse>    
            <DoubleArrowsRightContainer>
            <DoubleArrowsRightIcon/>
            </DoubleArrowsRightContainer>
            
            </RightArrowsItemsWraper>
                </ArrowContainerItem>
            

            <div>
                <p>1 из 100</p>
            </div>
            </ArrowContainer>
           
        </PaginationContainerItem>

    </PaginationContainer>
    </>
  )
}

export default PaginationBar