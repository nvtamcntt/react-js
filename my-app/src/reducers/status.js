

const initialState = false;

const myReducer = (state = initialState, action) => {
  if (action.type == 'TOGGLE_STATE'){
    state = !state;
  }
  return state;
}

export default myReducer