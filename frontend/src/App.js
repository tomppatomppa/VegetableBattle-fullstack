import './App.css'
import Game from './components/Game'
import Higscores from './components/Higscores'
import Vegetable from './components/Vegetable'
import Vegetables from './components/Vegetables'
import { useGameState } from './hooks'
import { countdown } from './utils/helpers'

function App() {
  const game = useGameState()

  const handleStartGame = () => {
    countdown(3)
  }

  return (
    <div className="App">
      Vihannes battle
      {game.player1 ? (
        <Vegetable data={game.player1} />
      ) : (
        <Vegetables select={game.addPlayer} />
      )}
      {game.player2 ? (
        <Vegetable data={game.player2} />
      ) : (
        <Vegetables select={game.addPlayer} />
      )}
      {game.isOn && <Game game={game} />}
      <button onClick={game.reset}>reset players</button>
      <button onClick={game.handleStart}>start</button>
      <Higscores />
    </div>
  )
}

export default App
