import * as types from '../constants/';

export const getData = () => async (dispatch) => {
  const response = await fetch('/api/data');
  const payload = await response.json();
  dispatch({
    type: types.GET_DATA,
    payload
  });
};

export const setCurrentDate = (date) => ({
  type: types.SET_CURRENT_DATE,
  payload: date
});
