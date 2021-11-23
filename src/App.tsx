import { useEffect } from 'react';
import Header from './components/Common/Header';
import { useSelector, useDispatch } from 'react-redux';
import { setTime } from './actions/globalActions';

const App = () => {
  const dispatch = useDispatch();
  const time = useSelector((state: any) => state.global.time);

  useEffect(() => {
    setInterval(() => {
      dispatch(setTime());
    }, 1000);
  }, [dispatch]);

  return (
    <div className="App">
      <Header title="Meu Site!" />
      <p style={{ textAlign: 'center', fontSize: '45px' }}>{time}</p>
    </div>
  );
};

export default App;
