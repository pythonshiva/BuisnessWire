let defaultState = {
  value: 123
};

const rootReducer = (state = defaultState, action) => {
  if (action.type === "HELLO_WORLD") {
    return {
      ...state
    };
  } else {
    return {
      ...state
    };
  }
};

export default rootReducer;
