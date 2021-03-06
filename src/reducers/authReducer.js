/* eslint-disable import/no-anonymous-default-export */
const INITIAL_STATE = {
  isSignedIn: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isSignedIn: true };

    case "SIGN_OUT":
      return { ...state, isSignedIn: false };

    default:
      return state;
  }
};
