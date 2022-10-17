import Typography from "@material-ui/core/Typography";
import React from "react";
import styled from "styled-components";

const GridItem = styled.div`
 vertical-align: center;
 text-align: center;
`;

export const usabilityColumn = [
    {
        field: 'usability',
        headerName: 'Применимость',
        width: 440,
        renderCell: (params) => (
            <GridItem>
                <Typography>Применимость Применимость Применимость Применимость Применимость Применимость Применимость Применимость</Typography>
            </GridItem>
        )
    },
];