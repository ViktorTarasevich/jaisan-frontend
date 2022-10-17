import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledBackButton = styled(Link)`
   cursor: pointer;
   margin-left: -20px;
   margin-right: 40px;
   position: absolute;
   -webkit-transition: .2s;
   transition: .2s;
   outline: none;
   border: none;
   border-radius: 14px;
   z-index: 1;
   text-decoration: none;
   color: inherit;
   
    :hover,:focus{
    transform: scale(1.3);     
    }
    
    .active{ 
    background-color: #272727; 
    transform: scale(1.35);  
    padding: 3px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    margin-top: 8px;
    }
`;