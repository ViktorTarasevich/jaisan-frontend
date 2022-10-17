import React from 'react'
import styled from "styled-components";
import Button from '../Buttons/Button'



const UserQuestionWrapper = styled.div`
width: 954px;
    height: 934px;
    background: #1A1A1A;
    border-radius: 10px;
    margin-left: 10px;
`;
const UserLeadText = styled.p`
width: 872px;
    padding: 0 40px;
    font-family: 'Roboto';
    margin-top: 80px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #FFFFFF;
`;
const UserQuestionForm = styled.div`
max-width: 400px;
    margin-left: 40px;
    margin-top: 20px;
`;
const Form = styled.form``;;

const FormQuestionLabel = styled.label`
display: grid;
`;
const FormQuestionInput = styled.input`
background: #2F2F2F;
border-radius: 5px;
height: 29px;
border: none;
outline: none;
color: #fff;
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 8px;
line-height: 9px;
padding: 0 10px;
margin-top: 5px;
margin-bottom: 20px;
`;

const FormQuestionBigInput = styled.div`
background: #2F2F2F;
border-radius: 5px;
height: 29px;
border: none;
outline: none;
color: #fff;
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 8px;
line-height: 9px;
padding: 0 10px;
margin-top: 5px;
margin-bottom: 20px;
`;
const QuestionBtnContainer = styled.div`
display: flex;
justify-content: space-between;
`;
const QuestionBtnItem = styled.div``;
const QuestionBtnItemBtn = styled.div`
margin-top: -10px;
`;
const QuestionFileContainer = styled.div`
width: fit-content;
`;
const AttachFileInput = styled.input`
opacity: 0;
position: absolute;
margin: 0;
padding-top: 1px;
margin-top: -10px;
height: 36px;
cursor: pointer;
`;
const AttachFileBtn = styled.span`
padding: 8px 20px;
border: 2px solid #fff;
border-radius: 10px;
background: #1A1A1A;
box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25), 0px -2px 6px rgba(0, 0, 0, 0.2);
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
margin-top: 10px;
cursor: pointer;
`;

const Developers = styled.p`
margin-top: 60%;
margin-left: 10px;
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 8px;
line-height: 9px;
`;

function QuestionUserForm() {
  return (
    <>
        <UserQuestionWrapper>
            <UserLeadText className='question-lead__text '>Также как перспективное планирование прекрасно подходит для реализации системы массового участия. Ясность нашей позиции очевидна: высококачественный прототип будущего проекта способствует повышению качества кластеризации усилий. Каждый из нас понимает очевидную вещь: экономическая повестка сегодняшнего дня, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для направлений прогрессивного развития.</UserLeadText>
            <UserQuestionForm >
                <Form>
                    <FormQuestionLabel>
                    Тема вопроса
                    <FormQuestionInput placeholder='Тема вопроса'/>
                    </FormQuestionLabel>
                    <FormQuestionLabel>
                    Тема вопроса
                    <FormQuestionBigInput placeholder='Опишите Ваш вопрос'></FormQuestionBigInput>
                    </FormQuestionLabel>
                    <QuestionBtnContainer >
                        <QuestionBtnItem >
                        <QuestionFileContainer>
                        <AttachFileInput className='question-btn__file' type='file' alt='прикрепить файл'/>
                        <AttachFileBtn>Прикрепить файл</AttachFileBtn>
                        </QuestionFileContainer>
                        </QuestionBtnItem>
                        <QuestionBtnItemBtn>
                        <Button
                        buttonText={'Задать вопрос'}
                        standartOrangeBtn={false}
                        buttonType={'submit'}
                        />
                        </QuestionBtnItemBtn>
                    </QuestionBtnContainer>
                </Form>
            </UserQuestionForm>
        <Developers>Сделано в insaitika group</Developers>
        </UserQuestionWrapper>
    </>
  )
}

export default QuestionUserForm