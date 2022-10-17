import styled from "styled-components";
import {StyledButtonWrapper} from "./Theme/button";

export const RowSelectedWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const RowSelectedTextWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left:30px;
    position: inherit;
    padding: 10px;
`

export const RowSelectedText = styled.div`
    margin-left:30px;
    font-size: 18px;
    color: #EE7500;
`;

export const RowButtonWrapper = styled.div`
    display:flex;
    justify-content: flex-end;
`;

export const CartButton = styled(StyledButtonWrapper)`
    color: white;
    background-color: #2f2f2f;
    padding: 6px;
`;

export const FavoriteButton = styled(StyledButtonWrapper)`
    margin-right: 10px;
`;