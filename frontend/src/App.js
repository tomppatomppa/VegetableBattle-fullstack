import './App.css'
import Game from './components/Game'
import Higscores from './components/Higscores'
import Notification from './components/Notification'
import Vegetables from './components/Vegetables'
import { useGameState } from './hooks'

function App() {
  const game = useGameState()

  return (
    <div className="App">
      Vihannes battle
      <Notification />
      {game.player1 ? null : <Vegetables select={game.addPlayer} />}
      {game.player2 ? null : <Vegetables select={game.addPlayer} />}
      {<Game game={game} />}
      <button onClick={game.reset}>reset players</button>
      <button onClick={game.handleStart}>start</button>
      <Higscores />
    </div>
  )
}

export default App
