import React from "react";
import {
  JoinFormWrapperStyled,
  JoinFormTitlestyled,
  JoinFormButtonStyled,
} from "./_styled";
import JoinFormInputWrapper from "./JoinFormInputWrapper";

export default function JoinFormWrapper({ title, buttonTitle, ...props }) {
  return (
    <JoinFormWrapperStyled {...props}>
      <JoinFormTitlestyled>{title}</JoinFormTitlestyled>
      <JoinFormInputWrapper />
      <JoinFormButtonStyled>{buttonTitle}</JoinFormButtonStyled>
    </JoinFormWrapperStyled>
  );
}
