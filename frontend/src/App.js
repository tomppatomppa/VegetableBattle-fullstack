import './App.css'
import Game from './components/Game'
import Higscores from './components/Higscores'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import Vegetables from './components/Vegetables'
import { useGameState } from './hooks'

function App() {
  const game = useGameState()

  return (
    <div className={`App  bg-cover bg-hero p-4 flex flex-col justify-between`}>
      <div className="h-screen mx-auto">
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
      <div className="absolute right-12">
        <Togglable buttonLabel="highscores">
          <Higscores />
        </Togglable>
      </div>
    </div>
  )
}

export default App
