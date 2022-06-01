import React, { useState, useEffect } from 'react';

import { Button, PageTitle } from 'components/common';

import * as Styled from 'pages/UserInfo/UserInfo.style';
import { getUser } from 'api/userApi';
import { useNavigate } from 'react-router-dom';

function UserInfo() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const handleNavigate = (nextPath) => () => {
    navigate('/password-check', {
      state: {
        isValid: true,
        nextPath,
      },
    });
  };

  useEffect(() => {
    async function fetchUser() {
      const responseData = await getUser();

      setUserData(responseData);
    }

    fetchUser();
  }, []);

  return (
    userData && (
      <>
        <PageTitle>내 정보</PageTitle>
        <Styled.Section>
          <Styled.List>
            <Styled.ListItem>
              <Styled.ListItemTitle>이메일 주소</Styled.ListItemTitle>
              <Styled.ListItemContent>{userData.email}</Styled.ListItemContent>
            </Styled.ListItem>
            <Styled.ListItem>
              <Styled.ListItemTitle>닉네임</Styled.ListItemTitle>
              <Styled.ListItemContent>{userData.nickname}</Styled.ListItemContent>
            </Styled.ListItem>
          </Styled.List>
          <Styled.ButtonContainer>
            <Styled.ButtonWrapper>
              <Button onClick={handleNavigate('/user-info-update')}>회원정보 수정</Button>
              <Button onClick={handleNavigate('/user-password-update')}>
                비밀번호 수정
              </Button>
            </Styled.ButtonWrapper>
            <Button variant="warning">회원 탈퇴</Button>
          </Styled.ButtonContainer>
        </Styled.Section>
      </>
    )
  );
}

export default UserInfo;