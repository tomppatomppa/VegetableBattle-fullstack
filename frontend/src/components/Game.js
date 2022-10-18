import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Vegetable from './Vegetable'
const Game = ({ game }) => {
  const status = useSelector((state) => state.status)

  useEffect(() => {
    let player1Timer = null
    if (game.isOn) {
      player1Timer = setTimeout(() => {
        game.fight(game.player1, game.player2)
      }, (1000 * game.player1.Delay) / 2)
    }
    return () => {
      clearTimeout(player1Timer)
    }
  }, [game.player2, game.isOn])

  useEffect(() => {
    let player2Timer = null
    if (game.isOn) {
      player2Timer = setTimeout(() => {
        game.fight(game.player2, game.player1)
      }, (1000 * game.player2.Delay) / 2)
    }
    return () => {
      clearTimeout(player2Timer)
    }
  }, [game.player1, game.isOn])

  return (
    <div>
      <div className="container mx-auto p-6 grid gap-12 grid-cols-2">
        <span className="font-bold">{game.player1?.Name}</span>
        <span className="font-bold ">{game.player2?.Name}</span>
        <Vegetable data={game.player1} />
        <Vegetable data={game.player2} />
      </div>
      {status.slice(-4).map((item) => (
        <h6 className="text-sm" key={item}>
          {item}
        </h6>
      ))}
    </div>
  )
}

export default Game
