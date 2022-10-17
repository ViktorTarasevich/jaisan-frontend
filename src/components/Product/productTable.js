import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { DataGrid } from '@mui/x-data-grid';
import {productSx} from "../../styledComponents/Product/product-sx";
import {descriptionColumn} from "../../styledComponents/Product/columns/description-column";
import { usabilityColumn } from "../../styledComponents/Product/columns/usability-column";
import { analogColumn } from "../../styledComponents/Product/columns/analog-column";

const ProductTableWrapper = styled.div`
height: 320px;
background: ${({theme}) => theme.options};
`;

const JsonParse = (product) => {
    const meetup = JSON.parse(product.additional_info);
    Object.defineProperty( meetup, "use", {
        value: meetup.Применимость,
    });
    return meetup.use;
}

const createDescriptionRows = (product) => ([
    {
        id:1,
        describe: {
            describe: JsonParse(product)
        },
        parameter: {
            parameter: product.brand
        },
        meaning: {
            meaning: product.provider
        }
    }
]);

const createUsabilityRows = (product) => ([
    {
        id:1,

    }
]);

const createAnalogsRows = (product) => ([
    {
        id:1,

    }
]);


function  ProductTable ({product, tabIndex}) {

    const [rows,setRows] = useState(() => createDescriptionRows(product));
    const [columns,setColumns] = useState(descriptionColumn)

        useEffect ( () => {
        switch(tabIndex) {
            case 0:
                setRows(() => createDescriptionRows(product));
                setColumns(descriptionColumn);
                break;
            case 1: 
                setRows(() => createUsabilityRows(product));
                setColumns(usabilityColumn);
                break;
            case 2: 
                setRows(() => createAnalogsRows(product));
                setColumns(analogColumn);
                break;
            default:
                setRows(() => createDescriptionRows(product));
                setColumns(descriptionColumn);
                break;    
        }

    }, [tabIndex, product])

    return (
        <ProductTableWrapper>
            <DataGrid
                headerHeight={60}
                rowHeight={100}
                rows={rows}
                sx={productSx}
                columns={columns}
                checkboxSelection={false}
                disableSelectionOnClick={true}
                disableColumnMenu={true}
                hideFooter={true}
                pageSize={1}
                hideFooterSelectedRowCount={true}
            />
        </ProductTableWrapper>
    );
}

export default ProductTable;