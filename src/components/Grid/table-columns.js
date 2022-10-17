import {GridItem} from "../../styledComponents/DataGrid/grid-item";
import Typography from "@material-ui/core/Typography";
import Counter from "../Atomic/counter";
import {CartIcon} from "../../assets/icons";
import * as React from "react";

const numberSorting = (a, b) => {
   return a-b;
 }
 
export const tableProductColumns = [
    {
        field: "name",
        headerName: "Наименование",
        flex: 1.4,
        align: "center",
        renderCell: (params) => (
            <GridItem>
                <Typography>{params.row.name}</Typography>
            </GridItem>
        )
    },
    {
        field: "brand",
        headerName: "Бренд",
        flex: 0.8,
        align: "center",
        renderCell: (params) => (
            <GridItem>
                <Typography>{params.row.brand}</Typography>
            </GridItem>
        )
    },
    {
        field: "articul",
        headerName: "Арт-л",
        flex: 0.6,
        align: "center",
        renderCell: (params) => (
            <GridItem>
                <Typography>{params.row.articul}</Typography>
            </GridItem>
        )
    },
    {
        field: "wholesale",
        headerName: "Цена Опт",
        flex: 0.6,
        align: "center",
        valueGetter: (params) => {
            return params.row.price;
        },
        sortComparator: numberSorting,
        renderCell: (params) => (
            <GridItem>
                <Typography>{params.row.price} р.</Typography>
            </GridItem>
        )
    },
    {
        field: "purchasePrice",
        headerName: "Розничная цена",
        flex: 0.9,
        align: "center",
        valueGetter: (params) => {
            return params.row.purchasePrice;
        },
        sortComparator: numberSorting,
        renderCell: (params) => (
            <GridItem>
                <Typography>{params.row.purchasePrice}</Typography>
            </GridItem>
        )
    },
    {
        field: "stock",
        headerName: "Остатки",
        flex: 0.8,
        align: "center",
        type: "number",
        valueGetter: (params) => {
            return params.row.in_stock;
        },
        sortComparator: numberSorting,
        renderCell: (params) => (
            <GridItem>
                <Typography>{params.row.in_stock}</Typography>
            </GridItem>
        ),
    },
    {
        field: "provider",
        headerName: "Поставщик",
        flex: 0.9,
        align: "center",
        renderCell: (params) => (
            <GridItem>
                <Typography>{params.row.provider}</Typography>
            </GridItem>
        )
    },
    {
        field: "deadline",
        headerName: "Срок поставки",
        flex: 0.8,
        align: "center",
        renderCell: (params) => (
            <GridItem>
                <Typography>{params.row.deadline}</Typography>
            </GridItem>
        )
    },
    {
        field: "sklad",
        headerName: "Склад",
        flex: 0.6,
        align: "center",
        renderCell: (params) => (
            <GridItem>
                <Typography>{params.row.sklad}</Typography>
            </GridItem>
        )
    },
    {
        field: "quantity",
        headerName: "Кол-во",
        flex: 0.8,
        align: "center",
        editable: false,
        renderCell: (params) => (
            <Typography component={'span'}><Counter inStock={params.row.in_stock}/></Typography>
        )
    },
    {
        field: "basket",
        headerName: "Корзина",
        flex: 0.6,
        align: "center",
        renderCell: (params) => (
            <Typography>
                <CartIcon bg='none' size={40} />
            </Typography>
        )
    }
];