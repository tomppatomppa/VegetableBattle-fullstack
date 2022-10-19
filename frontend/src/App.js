import { useEffect, useRef } from 'react'
import './App.css'
import Game from './components/Game'
import Higscores from './components/Higscores'
import Notification from './components/Notification'
import Slider from './components/Slider'

import Vegetables from './components/Vegetables'
import { useGameState } from './hooks'

function App() {
  const highscoreRef = useRef()
  const game = useGameState(highscoreRef)

  return (
    <div className={`App flex flex-col justify-between `}>
      <Slider ref={highscoreRef}>
        <Higscores latestWinner={game.latestWinner} />
      </Slider>
      <div className="h-screen mt-12 mx-auto ">
        <span className="font-bold ">Vihannes battle</span>
        <Notification />
        <div className="flex flex-row  justify-around">
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
    </div>
  )
}

export default App
