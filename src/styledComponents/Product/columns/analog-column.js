import Typography from "@material-ui/core/Typography";
import React from "react";
import styled from "styled-components";

const GridItem = styled.div`
 vertical-align: center;
 text-align: center;
`;

export const analogColumn = [
    {
        field: 'analog',
        headerName: 'Аналог',
        width: 440,
        renderCell: (params) => (
            <GridItem>
                <Typography>Аналог Аналог Аналог Аналог Аналог Аналог Аналог</Typography>
            </GridItem>
        )
    },
];