import React from 'react';
import styled from 'styled-components';
import JoinFormInputWrapper from './JoinFormInputWrapper';

const JoinFormWrapperStyled = styled.div`
    display: flex;
    flex-Direction: column;
    align-items: center;
    gap: 20px;
    width: 500px; 
    justify-content: center;
`;
const JoinFormTitlestyled = styled.div`
    font-size: 32px;
    font-weight: 700;
`
const JoinFormButtonStyled = styled.button`
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 0;
    width: 200px;
    border-radius: 90px;
    background: red;
    font-size: 16px;
    line-height: 30px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
`
export const JoinFormInputWrapperstyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 200px;
`
export const JoinFormInputTitle = styled.div`
    fotn-size: 16px;
    margin-bottom: 4px;
`

export default function JoinFormWrapper({title, buttonTitle, ...props}) {


    return (
        <JoinFormWrapperStyled {...props}>
            <JoinFormTitlestyled>{title}</JoinFormTitlestyled>
            <JoinFormInputWrapper />
            <JoinFormButtonStyled>{buttonTitle}</JoinFormButtonStyled>
        </JoinFormWrapperStyled>
    );
}