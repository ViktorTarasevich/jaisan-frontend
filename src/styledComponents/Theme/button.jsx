import styled from 'styled-components';

export const StyledButtonWrapper = styled.div`
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
   -webkit-transition: .2s;
   transition: .2s;
   outline: none;
   border: none;
   border-radius: 14px;
   z-index: 1;
   text-decoration: none;
   color: inherit;
   margin-left: 20px;
   margin-right: 10px;
   background-color: ${({theme}) => theme.activeIcon}; 

    :hover,:focus{
    transform: scale(1.1);     
    }
    
    .active{ 
    background-color: ${({theme}) => theme.activeIcon}; 
    transform: scale(1.20);  
    padding: 3px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    margin-top: 8px;
    }
`;