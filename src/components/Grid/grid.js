import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import {GridHeader} from '../Atomic/gridHeader'
import {GridTable} from "./gridTable";
import {useApi} from "../../hooks/useApi";

const GridWrapper = styled.div`
flex: 2 100%;
`;

export const Grid = () => {

    const { data, loaded } = useApi("/get-all", "GET");
    const [tableAvailableHeight, setTableAvailableHeight] = useState();

    useEffect(() => {
        const headerHeight =
            document.querySelector(".header-height-ref")?.clientHeight;
        const availableHeight = document.querySelector(
            ".available-height-ref"
        )?.clientHeight;

        if (headerHeight && availableHeight) {
            setTableAvailableHeight(availableHeight - headerHeight - 52);
            console.log(tableAvailableHeight);
        }
    }, [data]);

    return (
        <GridWrapper>
            <GridHeader title={'Каталог'} backButton={false} headerRadius={true}/>
            <GridTable rows={data || []} loaded={!loaded} height={tableAvailableHeight || 542}/>
        </GridWrapper>
    );
};