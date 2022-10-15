import './App.css'
import Game from './components/Game'
import Vegetable from './components/Vegetable'
import Vegetables from './components/Vegetables'
import { useGameState } from './hooks'

function App() {
  const game = useGameState()

  return (
    <div className="App">
      Vihannes battle
      {game.player1 ? (
        <Vegetable data={game.player1} />
      ) : (
        <Vegetables select={game.setPlayer1} />
      )}
      {game.player2 ? (
        <Vegetable data={game.player2} />
      ) : (
        <Vegetables select={game.setPlayer2} />
      )}
      {game.isOn && <Game game={game} />}
      <button onClick={game.reset}>reset players</button>
      <button onClick={game.handleStart}>start</button>
    </div>
  )
}

export default App
