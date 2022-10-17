import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`

body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
}

.MuiDataGrid-columnHeaders {
    background: ${({theme}) => theme.headerIcons};
    color: ${({theme}) => theme.text};
}

& div[data-rowIndex][role="row"] {
    color: ${({theme}) => theme.text};
}

.MuiDataGrid-cell {
    background: ${({theme}) => theme.body};
    border-color: ${({theme}) => theme.text};
}

.MuiDataGrid-footerContainer {
    background: ${({theme}) => theme.headerIcons};
}

.MuiTypography-body1{
    color: ${({theme}) => theme.text};
}

.css-14ts58d-MuiDataGrid-root {
    border: none !important;
    
    .MuiDataGrid-columnSeparator {
        display: none !important;
    }

    .MuiDataGrid-columnHeaders{
        color: ${({theme}) => theme.text} !important;
    }
    .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell {
        background: ${({theme}) => theme.options}
    }
}

.Toastify__toast--success {
    background: ${({theme}) => theme.toastContainer};
    border: ${({theme}) => theme.toastContainer};
} 

.Toastify__toast-body{
    color: ${({theme}) => theme.text};
}
.Toastify__close-button--light{
    color: ${({theme}) => theme.text};
}

// history sale

.css-11xur9t-MuiPaper-root-MuiTableContainer-root {
    border-radius: 0px !important;
}

.css-rqglhn-MuiTable-root{
    background: ${({theme}) => theme.toastContainer};
}

.css-ne39kw-MuiTableRow-root .MuiTableCell-head {
    color: ${({theme}) => theme.text};
}
.css-ne39kw-MuiTableRow-root .MuiTableCell-body {
    color: ${({theme}) => theme.text};
}

.css-1p1v9gy-MuiTableCell-root .MuiTableCell-body {
    color: ${({theme}) => theme.text};
}
`;
