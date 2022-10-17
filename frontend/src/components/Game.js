import { useEffect } from 'react'

const Game = ({ game }) => {
  useEffect(() => {
    let player1Timer = null
    if (game.player1) {
      player1Timer = setTimeout(() => {
        //game.player1Handler()
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
        //game.player2Handler()
        game.fight(game.player2, game.player1)
      }, (1000 * game.player2.Delay) / 2)
    }
    return () => {
      clearTimeout(player2Timer)
    }
  }, [game.player1])

  return <div></div>
}

export default Game
