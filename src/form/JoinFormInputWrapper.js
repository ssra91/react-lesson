import React from "react";
import {
  JoinFormInputWrapperstyled,
  JoinFormInputTitleStyled,
  InputTextWrapperStyled,
  EssectialTextStyled,
  AsteriskTextStyled,
  InputStyled,
} from "./_styled";

export default function JoinFormInputWrapper() {
  const list = [
    {
      title: "이메일",
      type: "email",
      placeholder: "이메일을 입력하세요",
      id: "1",
    },
    {
      title: "비밀번호",
      type: "password",
      placeholder: "비밀번호를 입력하세요",
      id: "1",
    },
    {
      title: "비밀번호 재확인",
      type: "password",
      placeholder: "비밀번호를 다시 입력하세요",
      id: "1",
    },
    { title: "이름", type: "name", placeholder: "이름을 입력하세요", id: "2" },
    { title: "나이", type: "", placeholder: "나이를 입력하세요", id: "2" },
  ];
  return (
    <>
      {list.map((idx) => (
        <JoinFormInputWrapperstyled>
          <InputTextWrapperStyled>
            <JoinFormInputTitleStyled key={idx.title}>
              {idx.title}
            </JoinFormInputTitleStyled>
            {idx.id === "1" ? (
              <EssectialTextStyled key={idx.id}>
                필수
                <AsteriskTextStyled>*</AsteriskTextStyled>
              </EssectialTextStyled>
            ) : (
              ""
            )}
          </InputTextWrapperStyled>
          <InputStyled type={idx.type} placeholder={idx.placeholder} />
        </JoinFormInputWrapperstyled>
      ))}
    </>
  );
}
