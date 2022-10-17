import Typography from "@material-ui/core/Typography";
import React from "react";
import styled from "styled-components";

const GridItem = styled.div`
 vertical-align: center;
 text-align: center;
`;

export const descriptionColumn = [
    {
        field: 'describe',
        headerName: 'Описание',
        width: 440,
        renderCell: (params) => (
            <GridItem>
                <Typography>{params.value.describe}</Typography>
            </GridItem>
        )
    },
    {
        field: 'parameter',
        headerName: 'Параметры',
        width: 200,
        renderCell: (params) => (
            <GridItem>
                <Typography>{params.value.parameter}</Typography>
            </GridItem>
        )
    },
    {
        field: 'meaning',
        headerName: 'Значение',
        width: 200,
        renderCell: (params) => (
            <GridItem>
                <Typography>{params.value.meaning}</Typography>
            </GridItem>
        )
    }
];