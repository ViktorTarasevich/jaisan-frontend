import * as React from "react";
import {DataGrid} from "@mui/x-data-grid";
import styled from 'styled-components';
import IconWrapper from "../Icon/filterIconWrapper";
import CheckBoxItem from "../Atomic/checkbox";
import {ruRU} from "@mui/material/locale";
import createTheme from "@mui/material/styles/createTheme";
import {ThemeProvider} from "@mui/material";
import Product from "../Product/product";
import {useState} from "react";
import {dataGridSx} from "../../styledComponents/DataGrid/gridSx";
import LinearProgress from "@mui/material/LinearProgress";
import {getPriceAllSelectedRows} from "../../utils/get-price-sum";
import {ToCartLabel} from "./to-cart-label";
import {tableProductColumns} from "./table-columns";
import {ToastContainer} from "react-toastify";

const theme = createTheme(
    ruRU,
);

const GridWrapper = styled.div`
    flex-grow:1;
`;

const StyledWrapper = styled.div`
    display: flex;
    height: 760px;
    flex-direction: column;
`;

export const GridTable = ({rows, loaded, height}) => {

    const [isPreviewShown, setPreviewShown] = useState(false);
    const [productInfo, setProductInfo] = useState({});
    const [pageSize, setPageSize] = useState(10);
    const [tableState, setTableState] = useState({
        selected: 0,
        priceAllSelected: 0,
    });
    const [productList, setProductList] = useState([]);

    let el = null;

    const getProductInfo = ({row}, {target}) => {
        // if (isPreviewShown && (target.classList.contains("decrease") || target.classList.contains("increase"))) {
        //     setProductInfo(null);
        // } else {
            setProductInfo({...row});
        // }
        el = target;
        // console.log(e.target)
        //
        // if(e.target.className === 'sc-jdAMXn bTqUBh decrease' || e.target.className === 'sc-jdAMXn bTqUBh increase') {
        //     setPreviewShown((shown) => {
        //         shown = false;
        //         return shown
        //     });
        //     console.log('+')
        // } else {
        //     setPreviewShown(true);
        // }
    }

    const onSelectRowHandler = (idList) => {
        setProductList((productList) => {
            productList = idList;
            return productList;
        })
        // if (el.classList.contains("decrease") || el.classList.contains("increase")) {
        //     setPreviewShown(false);
        // } else {
        //
        // }
        setPreviewShown(Boolean(idList.length));
        setTableState({
            selected: idList.length,
            priceAllSelected: getPriceAllSelectedRows(idList, rows),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <StyledWrapper>
                <ToastContainer autoClose={2000}/>
                <GridWrapper className="table-height-ref"
                             style={{height: height, width: "100%", position: "relative"}}>
                    {tableState.selected > 0 && (
                        <ToCartLabel
                            countSelected={tableState.selected}
                            resultPrice={tableState.priceAllSelected}
                            productList={productList}
                        />
                    )}
                    <DataGrid
                        headerHeight={60}
                        rowHeight={100}
                        sx={dataGridSx}
                        rows={rows}
                        getRowId={(row) => {
                            return row.name;
                        }}
                        columns={tableProductColumns}
                        loading={loaded}
                        checkboxSelection
                        onCellClick={getProductInfo}
                        onSelectionModelChange={onSelectRowHandler}
                        hideFooterSelectedRowCount={false}
                        rowsPerPageOptions={[10, 50, 100]}
                        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                        pagination
                        pageSize={pageSize}
                        components={{
                            BaseCheckbox: CheckBoxItem,
                            ColumnMenuIcon: IconWrapper,
                            LoadingOverlay: LinearProgress,
                        }}
                    />
                </GridWrapper>
                {(isPreviewShown && productInfo != null) && <Product product={productInfo}/>}
            </StyledWrapper>
        </ThemeProvider>

    )
};
