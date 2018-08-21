import * as types from './../constants/ActionTypes';

var initialState = [] ;

var myReducer = (state = initialState, action) =>{

    switch (action.types){
      case types.LIST_ALL:
          return state;
      // case types.LIST_ALL:
      //     return state;
          
      default: return state;
    }
    return state;
};

export default myReducer;