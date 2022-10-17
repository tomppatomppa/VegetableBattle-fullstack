import './App.css'
import Game from './components/Game'
import Higscores from './components/Higscores'
import Notification from './components/Notification'
import Vegetable from './components/Vegetable'
import Vegetables from './components/Vegetables'
import { useGameState } from './hooks'
import { useDispatch } from 'react-redux'
import { updateHighscore } from './reducers/highscoreReducer'
function App() {
  const game = useGameState()
  const dispatch = useDispatch()

  const test = () => {
    dispatch(updateHighscore({ name: 'Tomaatti', wins: false }))
  }
  return (
    <div className="App">
      Vihannes battle
      <Notification />
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
      <button onClick={test}>test</button>
    </div>
  )
}

export default App
