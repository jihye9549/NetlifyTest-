import React, { useState } from 'react';
import * as S from '../components/Login/Login.style';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailCheck, setEmailCheck] = useState(true);

  const emailRegex =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  const handleInputChange = (e) => {
    const InputValue = e.target.value;
    const InputName = e.target.name;

    if (InputName === 'email') {
      setEmail(InputValue);
      if (!emailRegex.test(InputValue)) {
        setEmailCheck(false);
      } else {
        setEmailCheck(true);
      }
    } else {
      setPassword(InputValue);
    }
  };

  return (
    <S.Wrap>
      <S.Title>이메일과 비밀번호를 입력해주세요</S.Title>
      <S.LoginForm>
        <S.InputLabel htmlFor="email">
          이메일 주소
          <S.LoginInput
            name="email"
            type="text"
            value={email}
            onChange={handleInputChange}
          />
        </S.InputLabel>
        {!emailCheck && (
          <S.EmailCheck>올바른 이메일을 입력해주세요.</S.EmailCheck>
        )}

        <br />
        <S.InputLabel htmlFor="password">
          비밀번호
          <S.LoginInput
            name="password"
            type="password"
            value={password}
            onChange={handleInputChange}
            placeholder="영문,숫자, 특수문자 포함 8자 이상"
          />
        </S.InputLabel>
        <S.SubmitBtn
          type="button"
          disabled={!(emailCheck && email !== '' && password !== '')}
        >
          확인
        </S.SubmitBtn>
      </S.LoginForm>
    </S.Wrap>
  );
}
