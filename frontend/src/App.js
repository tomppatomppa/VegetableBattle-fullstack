import Game from './components/Game';
import Higscores from './components/Higscores';
import Notification from './components/Notification';
import Slider from './components/Slider';

import Vegetables from './components/Vegetables';

import { useRef, useState } from 'react';
import { useGameState } from './hooks';

import { MdMusicNote } from 'react-icons/md';
import { MdMusicOff } from 'react-icons/md';
import music from './assets/soundFX/Supera.mp3';

function App() {
  const highscoreRef = useRef();
  const game = useGameState(highscoreRef);

  return (
    <div className="App flex flex-col justify-between">
      <Slider ref={highscoreRef}>
        <Higscores latestWinner={game.latestWinner} />
      </Slider>
      <div className="h-screen mt-12 mx-auto">
        <span className="font-bold ">VIHANNES BATTLE</span>
        <Notification />
        <div className="flex flex-row justify-around">
          <div>
            {game.player1 ? null : <Vegetables select={game.addPlayer} />}
          </div>
          <div>
            {game.player2 ? null : <Vegetables select={game.addPlayer} />}
          </div>
        </div>
        <div className="mt-24 card">{<Game game={game} />}</div>
        <div>
          <button className="btn" onClick={game.reset}>
            reset players
          </button>
          <button className="btn" onClick={game.handleStart}>
            start
          </button>
        </div>
      </div>
      <MusicPlayer
        onIcon={<MdMusicNote size="30" />}
        offIcon={<MdMusicOff size="30" />}
        audioSource={music}
      />
    </div>
  );
}

const MusicPlayer = ({ onIcon, offIcon, audioSource }) => {
  const [status, setStatus] = useState({ isPlaying: false });
  const musicRef = useRef(null);

  const toggleAudio = () => {
    status.isPlaying === false
      ? musicRef.current.play()
      : musicRef.current.pause();
  };

  return (
    <div
      className={`absolute top-6 left-10 w-10 h-10 cursor-pointer`}
      onClick={toggleAudio}
    >
      {status.isPlaying ? onIcon : offIcon}
      <audio
        ref={musicRef}
        src={audioSource}
        onPlay={() => setStatus({ isPlaying: true })}
        onPause={() => setStatus({ isPlaying: false })}
      ></audio>
    </div>
  );
};

export default App;
