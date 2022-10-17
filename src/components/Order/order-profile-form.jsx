import React from 'react'
import styled from 'styled-components';

import axios from 'axios'
import PrototypeUserForm from '../../../../components/Question/Forms/PrototypeUserForm';
import {
    CollapseIcon,
} from "../../../../assets/icons";
import {
    FormContainer,
    IconCollapseContainer,
    OrderConfirmContainerText,
    OrderConfirmTitle
} from "../../styledComponents/profile-form";

function OrderProfileForm() {

    const [userInfo, setUserInfo] = React.useState();
    React.useEffect(() => {
        const url = 'http://localhost:3001/userData';
        axios.get(url).then((resp) => {
            const infoAboutUser = resp.data;
            setUserInfo(infoAboutUser);
        })
    }, [setUserInfo])
    return (
        <>
            <FormContainer>
                <OrderConfirmContainerText>
                    {/* сделать чтоб с сервера выводилось значение */}
                    <OrderConfirmTitle><p>{userInfo[0].surname}</p><p>{userInfo[0].name}</p></OrderConfirmTitle>
                    <IconCollapseContainer>
                        <CollapseIcon color='#000000' bg='#D4D4D4;' size={20} reverse={true}/>
                    </IconCollapseContainer>
                </OrderConfirmContainerText>
                <PrototypeUserForm UserInfoObj={userInfo}/>
            </FormContainer>
        </>
    )
}

export default OrderProfileForm