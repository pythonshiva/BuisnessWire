const rootReducer = (state = [], action) => {
  if (action.type === "HELLO_WORLD") {
    return {
      ...state,
      value: action.value
    };
  } else {
    return {
      ...state
    };
  }
};

export default rootReducer;
