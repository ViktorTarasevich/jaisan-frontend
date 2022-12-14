import React, {useState} from 'react'
import {CollapseOpen} from "../../assets/icons";
import {
    CommentToOrderInput, CountInfoTitle, CountTitleContainer,
    FormContainer, FormInput, FormLabel,
    IconCollapseContainer,
    OrderConfirmContainerText,
    OrderConfirmTitle, SubmitInputBtn
} from "../../styledComponents/order-form";
import axios from "axios";
    import {API_BASE_URL} from "../../constants";

export const OrderForm =({data ,productCount = 4, productFullPrice = 100,user}) => {

    // function pivot(arr) {
    //     var mp = new Map();

    //     function setValue(a, path, val) {
    //         if (Object(val) !== val) { // primitive value
    //             var pathStr = path.join('.');
    //             var i = (mp.has(pathStr) ? mp : mp.set(pathStr, mp.size)).get(pathStr);
    //             a[i] = val;
    //         } else {
    //             for (var key in val) {
    //                 setValue(a, key == '0' ? path : path.concat(key), val[key]);
    //             }
    //         }
    //         return a;
    //     }

    //     var result = arr.map( obj => setValue([], [], obj) );
    //     return [[...mp.keys()], ...result];
    // }

    // function toCsv(arr) {
    //     return arr.map( row =>
    //         row.map ( val => isNaN(val) ? JSON.stringify(val) : +val ).join(',')
    //     ).join('\n');
    // }

    // let csv = toCsv(pivot(data));

    // downloadBlob(csv, 'export.csv', 'text/csv;charset=utf-8;')

    // function downloadBlob(content, filename, contentType) {
    //         // Create a blob
    //         var blob = new Blob([content], { type: contentType });
    //         var url = URL.createObjectURL(blob);

    //         // Create a link to download it
    //         var pom = document.createElement('a');
    //         pom.href = url;
    //         pom.setAttribute('download', filename);
    //         pom.click();
    //     }


    const jsonCart = JSON.stringify(data);
    console.log(jsonCart);

    console.log(data);
    const [orderForm, setOrderForm] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        comment: ''
    });

    const addOrder = async ()  => {
        const res = await axios.post(`${API_BASE_URL}/order`, orderForm).catch((e)=>{
            console.log(e);
        });
        console.log(res?.status);
    }

    const fieldChangeHandler = (evt) => setOrderForm({...orderForm,[evt.target.name]: evt.target.value});


    return (
        <>
            <FormContainer>
                {user && <OrderConfirmContainerText>
                        <OrderConfirmTitle>{user.lastname} {user.name}</OrderConfirmTitle>
                    </OrderConfirmContainerText>
                }
                <OrderConfirmContainerText>
                    <OrderConfirmTitle>???????????????????? ????????????</OrderConfirmTitle>
                    <IconCollapseContainer>
                        <CollapseOpen color='#EE7500' bg='none' size={30} reverse={true}/>
                    </IconCollapseContainer>
                </OrderConfirmContainerText>
                <form>
                    <FormLabel>
                        * ??????????????
                        <FormInput name='lastname' placeholder='????????????' onChange={fieldChangeHandler}/>
                    </FormLabel>
                    <FormLabel>
                        * ??????
                        <FormInput name='firstname' placeholder='????????' onChange={fieldChangeHandler}/>
                    </FormLabel>
                    <FormLabel>
                        ??????????????
                        <FormInput name='phone' placeholder='?????????????? ?????????? ????????????????' onChange={fieldChangeHandler}/>
                    </FormLabel>
                    <FormLabel>
                        ?????????????????????? ?? ????????????
                        <CommentToOrderInput name='comment' placeholder='???????????????? ??????????????????????' onChange={fieldChangeHandler}/>
                    </FormLabel>
                    <CountTitleContainer>
                        {/* ?? ?????????? ???????? ???????????????? ???????????????????? ??????????????  */}
                        <CountInfoTitle>??????????????: <b>{data.length}</b></CountInfoTitle>
                        {/* ?? ?????????? ???????? ???????????????? ?????? ?????????????????????? ?????????? */}
                        <CountInfoTitle>??????????: <b>100</b> BYN</CountInfoTitle>
                    </CountTitleContainer>
                    <SubmitInputBtn type="button" onClick={addOrder}>????????????????</SubmitInputBtn>
                </form>
            </FormContainer>
        </>
    )
}
