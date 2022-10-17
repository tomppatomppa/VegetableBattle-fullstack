import { useEffect } from 'react'
import { useSelector } from 'react-redux'
const Game = ({ game }) => {
  const status = useSelector((state) => state.status)
  useEffect(() => {
    let player1Timer = null
    if (game.player1) {
      player1Timer = setTimeout(() => {
        game.fight(game.player1, game.player2)
      }, (1000 * game.player1.Delay) / 2)
    }
    return () => {
      clearTimeout(player1Timer)
    }
  }, [game.player2])

  useEffect(() => {
    let player2Timer = null
    if (game.player2) {
      player2Timer = setTimeout(() => {
        game.fight(game.player2, game.player1)
      }, (1000 * game.player2.Delay) / 2)
    }
    return () => {
      clearTimeout(player2Timer)
    }
  }, [game.player1])

  return (
    <div>
      {status.slice(-4).map((item) => (
        <h6 key={item}>{item}</h6>
      ))}
    </div>
  )
}

export default Game
