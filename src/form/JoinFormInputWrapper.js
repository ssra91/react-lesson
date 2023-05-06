import React from 'react';
import { JoinFormInputWrapperstyled, JoinFormInputTitle } from './JoinFormWrapper';

export default function JoinFormInputWrapper() {
    const list = [
        {title:'이메일', type: 'email', placeholder: '이메일을 입력하세요'},
        {title: '비밀번호' , type: 'password', placeholder: '비밀번호를 입력하세요'},
        {title: '비밀번호 재확인', type: 'password', placeholder: '비밀번호를 다시 입력하세요'},
        {title: '이름', type: 'name', placeholder: '이름을 입력하세요'},
        {title: '나이', type: '', placeholder: '나이를 입력하세요'},
    ]
    return (
        <>
        {list.map((idx) => (
            <JoinFormInputWrapperstyled>
                <JoinFormInputTitle key={idx}>{idx.title}</JoinFormInputTitle>
                <input type={idx.type} placeholder={idx.placeholder}/>
            </JoinFormInputWrapperstyled>
            ))}
        </>
        
    );
}
