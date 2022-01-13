import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { globalActions } from '../slices/globalSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const { time } = useSelector((state: any) => state.globalReducer);

  useEffect(() => {
    setInterval(() => {
      dispatch(globalActions.setTime(new Date().toLocaleString()));
    }, 1000);
  }, [dispatch]);

  return (
    <main>
      <p className="time-text">{time}</p>
    </main>
  );
};

export default HomePage;
