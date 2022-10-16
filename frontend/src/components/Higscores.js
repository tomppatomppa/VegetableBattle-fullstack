import { useEffect, useState } from 'react'
import Togglable from './Togglable'
import fighterService from '../services/fighters'

const Higscores = () => {
  const [highscores, setHighscores] = useState([])
  useEffect(() => {
    fighterService.getAll().then((players) => {
      setHighscores(players)
    })
  }, [])
  return (
    <div>
      <h1>Highscores</h1>
      {highscores.map((item) => (
        <div key={item.id}>
          <Togglable name={`${item.name} ${item.wins}`} buttonLabel="Details">
            {item.name} {'Battles Won'} {item.wins}
          </Togglable>
        </div>
      ))}
    </div>
  )
}

export default Higscores
