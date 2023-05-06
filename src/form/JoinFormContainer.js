import React from "react";
import JoinFormWrapper from "./JoinFormWrapper";
import styled from "styled-components";

const JoinFormContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function JoinFormContainer({children}){
    return(
        <JoinFormContainerStyled>
            <JoinFormWrapper title={'회원가입'} buttonTitle={'가입하기'}>
                {children}
            </JoinFormWrapper>
        </JoinFormContainerStyled>
        
    )

}