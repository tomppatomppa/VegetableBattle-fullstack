import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Togglable from './Togglable'
import { initializeHighscores } from '../reducers/highscoreReducer'

const Higscores = () => {
  const highscores = useSelector((state) =>
    state.highscores.filter((h) => h.wins || h.losses !== 0)
  )
  const sorted = [...highscores].sort((a, b) => b.wins - a.wins)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeHighscores())
  }, [dispatch])

  return (
    <div className="bg-red-200 mx-auto  w-1/3 ">
      <h1 className="font-bold">Highscores</h1>
      <div className="text-sm text-right bg-blue-100  ">
        {sorted.map((item) => (
          <div className="" key={item.id}>
            <Togglable name={`${item.name} ${item.wins}`} buttonLabel="Details">
              {item.name} {'Battles Won: '} {item.wins}
              {'Battles Lost: '} {item.losses}
            </Togglable>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Higscores
