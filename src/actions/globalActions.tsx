export const setTime = () => {
  return (dispatch: any) => {
    dispatch({ type: 'SET_TIME', payload: new Date().toLocaleString() });
  };
};
