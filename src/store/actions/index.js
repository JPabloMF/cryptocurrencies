import { API_REQUEST, API_FAILED } from '../actionTypes';

export const apiRequest = (data) => ({
  type: API_REQUEST,
  data
});

export const apiRequestFailed = (data) => ({
  type: API_FAILED,
  data
});
