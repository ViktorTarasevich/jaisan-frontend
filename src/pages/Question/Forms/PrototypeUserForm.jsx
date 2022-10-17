import React from 'react'
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import {
    PenIcon,
  } from "../../../assets/icons";

const FormLabel = styled.label`
display: flex;
flex-direction: column;
margin: 5px 5% 0;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 12px;
color: #000000; 

:first-child{
    margin-top: 10px;  
}
`;
const FormInput = styled.input`
background: #C4C4C4;
border-radius: 10px;
height: 29px;
border: none;
outline: none;
margin-top: 5px;
color: rgba(0, 0, 0, 0.4);
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 10px;
line-height: 9px;
padding: 0 10px;
`;

const LabelContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 25px;
`;

const SubmitInputBtn = styled.button`
background: #494949;
border-radius: 5px;
height: 46px;
width: 90%;
margin-left: 5%;
color: #FFFFFF;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
border: none;
margin-top: 20px;
`;
const PenIconContainer = styled.div`
display: flex;
align-items: center;
`;
function PrototypeUserForm({UserInfoObj}) {

    const onSubmit = data => console.log(data);
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
    <>
    {UserInfoObj &&  <form onSubmit={handleSubmit(onSubmit)}>
         <FormLabel>
            <LabelContainer>
            <p> Фамилия</p> 
         <PenIconContainer><PenIcon color='#000000' bg='#E9E9E9' size={20} /></PenIconContainer>
         </LabelContainer>
      <FormInput  defaultValue={UserInfoObj[0].surname}  {...register("name")} /> 
      {errors.name && <span>Это поле обязательно должно быть заполненно</span>}
            </FormLabel>   
      <FormLabel>
      <LabelContainer>
            <p> Имя</p> 
         <PenIconContainer><PenIcon color='#000000' bg='#E9E9E9' size={20} /></PenIconContainer>
         </LabelContainer>
      <FormInput defaultValue={UserInfoObj[0].name} {...register("suriname")} />
      {errors.suriname && <span>Это поле обязательно должно быть заполненно</span>}
      </FormLabel>
      <FormLabel>
      <LabelContainer>
            <p> Телефон</p> 
         <PenIconContainer><PenIcon color='#000000' bg='#E9E9E9' size={20} /></PenIconContainer>
         </LabelContainer>
      <FormInput defaultValue={UserInfoObj[0].number} {...register("phone")} />
      </FormLabel>
      <FormLabel>
      <LabelContainer>
            <p> E-mail</p> 
         <PenIconContainer><PenIcon color='#000000' bg='#E9E9E9' size={20} /></PenIconContainer>
         </LabelContainer>
      <FormInput defaultValue={UserInfoObj[0].email} {...register("phone")} />
      </FormLabel>
      <SubmitInputBtn type="submit">Изменить</SubmitInputBtn>
    </form>}
    </>
  )
}

export default PrototypeUserForm