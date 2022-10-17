import styled from "styled-components";

export const FormContainer = styled.div`
    width: 17%;
    background: ${({theme}) => theme.headerTheme};
    border-radius: 10px;
    margin: 0px 10px 10px 0px;
`;
export const OrderConfirmContainerText = styled.div`
    border-radius: 10px;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
export const IconCollapseContainer = styled.div`
    transform: rotate(180deg);
`;
export const OrderConfirmTitle = styled.h4`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    color: ${({theme}) => theme.text};
`;
export const FormLabel = styled.label`
    display: flex;
    flex-direction: column;
    margin: 20px 5% 0;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 12px;
    color: ${({theme}) => theme.text};
    
    :first-child{
        margin-top: 10px;  
    }
`;
export const FormInput = styled.input`
    background: ${({theme}) => theme.searchField};
    border-radius: 10px;
    height: 29px;
    border: none;
    outline: none;
    margin-top: 5px;
    color: rgba(0, 0, 0, 0.4);
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 9px;
    padding: 0 10px;
    color: ${({theme}) => theme.text};
    cursor: pointer;
    ::placeholder,
    ::-webkit-input-placeholder {
        opacity: 0.3;
    }
        :hover,:focus{
    transform: scale(1.1);     
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
export const CommentToOrderInput = styled.textarea`
    background: ${({theme}) => theme.searchField};
    border-radius: 10px;
    height: 110px;
    border: none;
    outline: none;
    margin-top: 10px;
    color: rgba(0, 0, 0, 0.4);
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 9px;
    padding: 10px;
    resize: none;
    color: ${({theme}) => theme.text};
    cursor: pointer;
    ::placeholder,
    ::-webkit-input-placeholder {
        opacity: 0.3;
    }
    :hover,:focus{
    transform: scale(1.06);     
    }
    
    .active{ 
    background-color: #272727; 
    transform: scale(1.3);  
    padding: 3px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    margin-top: 8px;
    }
    `;
export const CountInfoTitle = styled.h4`
    color: ${({theme}) => theme.text};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    margin-top: 14px;
    margin-bottom: 9px;
`;
export const CountTitleContainer = styled.div`
    ma rgin-top: 20px;
    margin-left: 5%;
`;
export const SubmitInputBtn = styled.button`
    background: #EE7500;
    border-radius: 5px;
    height: 46px;
    width: 90%;
    margin-left: 5%;
    color: #FFFFFF;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    border: none;
    cursor: pointer;

    :hover,:focus{
    transform: scale(1.1);     
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