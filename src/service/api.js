// NOTE : 보안을 위해 요청 Url은 .env 파일로 별도 분리 하겠습니다.
// REVIEW : 테스트가 필요합니다.
// GET 요창 테스트 완료(양정화)

import axios from 'axios';

// Base URL 설정
const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

/***********************************************
 *                  공통 요청 함수
 ***********************************************/
const getRequest = async (url, params = {}) => {
  try {
    const response = await api.get(url, { params });
    return response.data;
  } catch (error) {
    console.error('GET 요청 실패:', error);
    throw error;
  }
};

const postRequest = async (url, data) => {
  try {
    const response = await api.post(url, data);
    return response.data;
  } catch (error) {
    console.error('POST 요청 실패:', error);
    throw error;
  }
};

const patchRequest = async (url, data) => {
  try {
    const response = await api.patch(url, data);
    return response.data;
  } catch (error) {
    console.error('PATCH 요청 실패:', error);
    throw error;
  }
};

const deleteRequest = async (url) => {
  try {
    const response = await api.delete(url);
    return response.data;
  } catch (error) {
    console.error('DELETE 요청 실패:', error);
    throw error;
  }
};

/***********************************************
 *                  롤링 리스트
 ***********************************************/

// GET
export const getRollingList = async (params) =>
  getRequest('/recipients/', params);
// POST
export const postRolling = async (newData) =>
  postRequest('/recipients/', newData);

// DELETE
export const deleteRolling = async (id) => deleteRequest(`/recipients/${id}/`);

/***********************************************
 *                  롤링 메세지
 ***********************************************/
// 리스트 GET
export const getMessagesList = async (id, params) =>
  getRequest(`/recipients/${id}/messages/`, params);

// POST
export const postMessages = async (id, newData) =>
  postRequest(`/recipients/${id}/messages/`, newData);

// 메세지 GET
export const getMessages = async (id) => getRequest(`/messages/${id}/`);

// PATCH
export const patchMessages = async (id, updateData) =>
  patchRequest(`/messages/${id}/`, updateData);

// DELETE
export const deleteMessages = async (id) => deleteRequest(`/messages/${id}/`);

/***********************************************
 *                  롤링 이모지
 ***********************************************/
// GET
export const getRollingEmoji = async (id, params) =>
  getRequest(`/recipients/${id}/reactions/`, params);

// DELETE
export const deleteRollingEmoji = async (id) =>
  deleteRequest(`/recipients/${id}/reactions/`);

/***********************************************
 *              메시지 생성 프로필 이미지
 ***********************************************/
// GET
export const getProfileImg = async () => {
  try {
    const res = await axios.get(
      'https://rolling-api.vercel.app/profile-images/',
    );
    return res.data;
  } catch (error) {
    console.error('GET 요청 실패', error);
    throw error;
  }
};

/***********************************************
 *                리스트 배경 이미지
 ***********************************************/
// GET
export const getBackgroundImg = async () => {
  try {
    const res = await axios.get(
      'https://rolling-api.vercel.app/background-images/',
    );
    return res.data;
  } catch (error) {
    console.error('GET 요청 실패', error);
    throw error;
  }
};
