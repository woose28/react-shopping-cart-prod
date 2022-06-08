import { API_ENDPOINT } from 'api/constants';
import customInstance from 'api/customInstance';

export const sendCheckEmailDuplicateRequest = async (email) => {
  const response = await customInstance.get(API_ENDPOINT.USER, {
    params: {
      email,
    },
  });

  return response.data.success;
};

export const sendAddUserRequest = async (userData) => {
  await customInstance.post(API_ENDPOINT.USER, userData);
};

export const sendLoginRequest = async (loginData) => {
  const response = await customInstance.post(API_ENDPOINT.LOGIN, loginData);
  const { nickname, token } = response.data;

  window.sessionStorage.setItem('nickname', nickname);
  window.sessionStorage.setItem('token', token);

  customInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  return nickname;
};

export const sendGetUserRequest = async () => {
  const response = await customInstance.get(API_ENDPOINT.AUTH.ME);

  return response.data;
};

export const sendCheckPasswordRequest = async (password) => {
  const response = await customInstance.post(API_ENDPOINT.AUTH.PASSWORD_CHECK, {
    password,
  });

  return response.data.success;
};

export const sendUpdateNicknameRequest = async (nickname) => {
  await customInstance.patch(API_ENDPOINT.AUTH.ME, {
    nickname,
  });
};

export const sendUpdatePasswordRequest = async (password) => {
  await customInstance.patch(API_ENDPOINT.AUTH.PASSWORD, {
    password,
  });
};

export const sendDeleteUserRequest = async () => {
  await customInstance.delete(API_ENDPOINT.AUTH.ME);
};
