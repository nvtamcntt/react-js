import * as types from './../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('tasks'));

var initialState = data ? data : [];

var myReducer = (state = initialState, action) =>{

    switch (action.types){
      case types.LIST_ALL:
          return state;
      case types.ADD_TASK:
      console.log(action);
          return state;
          
      default: return state;
    }
    return state;
};

export default myReducer;