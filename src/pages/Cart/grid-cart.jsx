import React, {useState} from "react";
import {DataGrid} from "@mui/x-data-grid";
import {dataGridSx} from "../../styledComponents/DataGrid/gridSx"
import {CartHeader} from "./cart-header";
import {CartProductColumns} from "./cart-table-columns";
import styled from "styled-components";
import CheckBoxItem from "../../components/Atomic/checkbox";
import LinearProgress from "@mui/material/LinearProgress";
import {TrashIcon} from "../../assets/icons";
import {API_BASE_URL} from "../../constants";
import axios from "axios";

const GridWrapper = styled.div`
    flex-grow:1;
`
const StyledTrashButton = styled.button`
    background: inherit;
    border: none;
`;

export default function GridCart({rows, loaded, height}) {
    const [pageSize, setPageSize] = useState(10);
    const [selectProduct, setSelectedProduct] = useState([]);

    const onSelectRowHandler = (idList) => setSelectedProduct(idList);

    const handleClick = async () => {
        const res = await axios.delete(`${API_BASE_URL}/cart`, {data: selectProduct}).catch(e => {
            console.log(e)
        })
        window.location.reload();
    }

    const cartField =
            {
                field: "delete",
                headerName: "Удалить",
                flex: 0.8,
                align: "center",
                editable: false,
                renderCell: (cellValues) => {
                    return (
                        <StyledTrashButton
                            onClick={(event) => {
                                handleClick(event, cellValues);
                            }}
                        >
                            <TrashIcon
                                size={50}
                            />
                        </StyledTrashButton>
                    );
                }
            }

    return (
        <div>
            <CartHeader title={'Заказы'}/>
            <GridWrapper className="table-height-ref"
                         style={{height: height, width: "100%", position: "relative"}}>
            <DataGrid
                sx={dataGridSx}
                headerHeight={60}
                rowHeight={100}
                rows={rows}
                getRowId={(row) => {
                    return row.productArticul;
                }}
                columns={[...CartProductColumns,...[cartField]]}
                loading={loaded}
                checkboxSelection
                hideFooterSelectedRowCount={false}
                rowsPerPageOptions={[10,50,100]}
                onSelectionModelChange={onSelectRowHandler}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                pagination
                pageSize={pageSize}
                components={{
                    BaseCheckbox: CheckBoxItem,
                    LoadingOverlay: LinearProgress,
                }}
            />
            </GridWrapper>
        </div>
    );
}
