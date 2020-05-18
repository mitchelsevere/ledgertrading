import * as types from '../constants';

const initialState = {
  data: [],
  currentDate: 0
};

const optionsReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case types.GET_DATA: {
      return { ...state, data: payload };
    }
    case types.SET_CURRENT_DATE: {
      return { ...state, currentDate: payload };
    }
    default: {
      return state;
    }
  }
};

export default optionsReducer;
