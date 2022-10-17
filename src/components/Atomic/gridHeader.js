import React from "react";
import {
    CollapseOpen,
    ArrowLeftIcon
} from "../../assets/icons";
import {CollapseButton, GridHeaderTitle, GridHeaderWrapper, ToLandingLink} from "../../styledComponents/grid-header";

export const GridHeader = ({title, backButton, headerRadius}) => {

    return (
        <GridHeaderWrapper headerRadius={headerRadius}>
            <GridHeaderTitle>
                {backButton &&
                <ToLandingLink to={'/'}>
                    <ArrowLeftIcon color='#EE7500' size={34}/>
                </ToLandingLink>}
                {title}
            </GridHeaderTitle>
            <CollapseButton>
                <CollapseOpen color='#EE7500' size={34}/>
            </CollapseButton>
        </GridHeaderWrapper>
    );
};