import * as types from '../constants';

const initialState = {
  data: [],
  currentDate: ''
};

const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DATA: {
      console.log('hitting reducers', action.payload);
      return { ...state, data: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default optionsReducer;
