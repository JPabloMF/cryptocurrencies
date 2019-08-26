import { API_REQUEST, API_FAILED } from '../actionTypes';

const apiReducer = (state = {}, action) => {
  switch (action.type) {
    case API_REQUEST:
      return {
        ...state,
        result: action
      };
    case API_FAILED:
      return {
        ...state,
        result: action
      };
    default:
      return state;
  }
};

export default apiReducer;
