import React from "react";
import { JoinFormContainerStyled } from "./_styled";
import JoinFormWrapper from "./JoinFormWrapper";

export default function JoinFormContainer({ children }) {
  return (
    <JoinFormContainerStyled>
      <JoinFormWrapper title={"회원가입"} buttonTitle={"가입하기"}>
        {children}
      </JoinFormWrapper>
    </JoinFormContainerStyled>
  );
}
