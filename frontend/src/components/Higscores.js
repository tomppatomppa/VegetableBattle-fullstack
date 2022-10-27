import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Togglable from './Togglable';
import { initializeHighscores } from '../reducers/highscoreReducer';

const Higscores = ({ latestWinner }) => {
  const highscores = useSelector((state) =>
    state.highscores.filter((h) => h.wins || h.losses !== 0)
  );
  const sorted = [...highscores].sort((a, b) => b.wins - a.wins);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeHighscores());
  }, [dispatch]);

  return (
    <div className="h-full overflow-auto ">
      <h1 className="font-bold">HIGHSCORES</h1>
      <ul>
        {sorted.map((item) => (
          <div
            className={`${
              latestWinner === item.name ? 'bg-green-200 animate-pulse' : ''
            } rounded-sm mb-1 text-right p-1 hover:bg-blue-300 border border-gray-300`}
            key={item.id}
          >
            <Togglable name={`${item.name} ${item.wins}`} buttonLabel="Details">
              <ul>
                <div>
                  {'Battles Won: '} {item.wins}
                </div>
                <div>
                  {'Battles Lost: '} {item.losses}
                </div>
              </ul>
            </Togglable>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Higscores;
