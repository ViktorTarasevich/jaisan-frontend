export const dataGridSx = {
    border: "none",
    "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within":
        {
            outline: "none !important",
        },
    "& .MuiDataGrid-columnHeaderTitleContainer": {
        justifyContent: 'center',
    },
    '& div[data-rowIndex][role="row"]': {
        minHeight: "60px !important",
        height: 'auto',
    },
    ".MuiDataGrid-columnHeaders": {
        fontSize: '1vw',
        outline: 'none',
        align: 'center',
        borderRadius: 0,
        whiteSpace: "break-spaces",
    },
    ".MuiDataGrid-columnHeaderDraggableContainer": {
        flexDirection: "row !important" 
    },
    ".MuiDataGrid-columnHeaderTitle": {
        whiteSpace: "break-spaces",
        lineHeight: 1,
        textAlign: "center"
    },
    ".MuiTypography-body1": {
        fontSize: '0.9vw',
        whiteSpace: "break-spaces",
    },
    
    ".MuiDataGrid-iconButtonContainer": {
        display: "none"
    },
    ".MuiDataGrid-menuIcon": {
        visibility: "visible",
        width: "auto",
    },
    ".MuiDataGrid-footerContainer": {
        borderBottomLeftRadius: "12px",
        borderBottomRightRadius: "12px",
    },
    ".MuiDataGrid-selectedRowCount": {
        width: "50%"
    },
    ".MuiTablePagination-toolbar": {
        fontWeight: 600,
        fontSize: '20px',
        color: "#EE7500"
    },
    ".MuiTablePagination-selectLabel": {
        fontWeight: 500,
        fontSize: '18px',
    },
    ".MuiTablePagination-actions": {},
    ".MuiTablePagination-displayedRows": {
        fontSize: '18px',
    },
    ".MuiDataGrid-columnSeparator": {
        display: 'none'
    },
    '.css-ptiqhd-MuiSvgIcon-root': {
        display: 'none'
    },
    '.css-de9k3v-MuiDataGrid-selectedRowCount': {
        visibility: 'hidden'
    }
};