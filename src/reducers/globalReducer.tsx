const initialState = {
  time: new Date().toLocaleString(),
};

type ActionType = {
  type: string;
  payload: any;
};

const globalReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case 'SET_TIME':
      return { ...state, time: action.payload };
    default:
      return state;
  }
};

export default globalReducer;
