import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Togglable from './Togglable'
import { initializeHighscores } from '../reducers/highscoreReducer'

const Higscores = () => {
  const highscores = useSelector((state) => state.highscores)
  const sorted = [...highscores].sort((a, b) => b.wins - a.wins)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeHighscores())
  }, [dispatch])

  return (
    <div>
      <h1>Highscores</h1>
      {sorted.map((item) => (
        <div key={item.id}>
          <Togglable name={`${item.name} ${item.wins}`} buttonLabel="Details">
            {item.name} {'Battles Won: '} {item.wins}
            {'Battles Lost: '} {item.losses}
          </Togglable>
        </div>
      ))}
    </div>
  )
}

export default Higscores
