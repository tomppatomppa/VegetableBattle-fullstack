import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Vegetable from './Vegetable';

const Game = ({ game }) => {
  const gameStatus = useSelector((state) => state.status);
  const reverseStatus = [...gameStatus].reverse();

  useEffect(() => {
    let player1Timer = null;
    if (game.isOn) {
      player1Timer = setTimeout(() => {
        game.fight(game.player1, game.player2);
      }, (1000 * game.player1.Delay) / 2);
    }
    return () => {
      clearTimeout(player1Timer);
    };
  }, [game.player2, game.isOn]);

  useEffect(() => {
    let player2Timer = null;
    if (game.isOn) {
      player2Timer = setTimeout(() => {
        game.fight(game.player2, game.player1);
      }, (1000 * game.player2.Delay) / 2);
    }
    return () => {
      clearTimeout(player2Timer);
    };
  }, [game.player1, game.isOn]);

  return (
    <div>
      <div className="container mx-auto sm:p-6 grid sm:gap-12  grid-cols-2 ">
        <span className="font-bold">{game.player1?.Name}</span>
        <span className="font-bold ">{game.player2?.Name}</span>
        <Vegetable data={game.player1} />
        <Vegetable data={game.player2} rightSide={true} />
      </div>
      <div className="mx-auto justify-center max-w-lg">
        {reverseStatus.slice(0, 4).map((item, index) => (
          <h6
            className={`text-sm ${index === 0 ? 'font-bold text-lg' : ''}`}
            key={item}
          >
            {item}
          </h6>
        ))}
      </div>
    </div>
  );
};

export default Game;
