import { useEffect } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { globalActions } from '../slices/globalSlice';

const HomePage = () => {
  const { time } = useSelector((state: RootStateOrAny) => state.globalReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    setInterval(() => {
      dispatch(globalActions.setTime(new Date().toLocaleString()));
    }, 1000);
  }, [dispatch]);

  return (
    <main>
      <h1>Hello, I'm Lucas.</h1>
      <p>Time: {time}</p>
    </main>
  );
};

export default HomePage;
