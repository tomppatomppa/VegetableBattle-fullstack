import { createHighscore } from '../reducers/highscoreReducer'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { createNotification } from '../reducers/notificationReducer'
import { useEffect, useState } from 'react'

const Vegetable = ({ data, select }) => {
  const highscores = useSelector((state) => state.highscores)
  const [color, setColor] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    setColor('red')
    setTimeout(() => {
      setColor('')
    }, 200)
  }, [data])

  if (!data) {
    return null
  }
  const found = [...highscores].find(
    (vegetable) => vegetable.name === data.Name
  )

  const notify = (message, type = 'info') => {
    dispatch(createNotification({ message, type }, 4))
  }
  /*
  Add vegetable if it doesn't exists in database
  */
  const handleSelect = async (data) => {
    //return false if dublicate player
    if (!select(data)) {
      notify('Cannot fight yourself', 'alert')
      return
    }
    if (!found) {
      dispatch(createHighscore(data.Name))
    }
    notify(`Vegetable name ${data.Name} joined!`)
  }

  return (
    <div>
      <ul>
        <li>
          Name: {data.Name}{' '}
          {select && <button onClick={() => handleSelect(data)}>select</button>}
        </li>
        <li>
          Health: <span style={{ background: color }}>{data.Health}</span>{' '}
        </li>
        <li>Attack: {data.Attack}</li>
        <li>Defence: {data.Defence}</li>
        <li>Delay: {data.Delay}</li>
      </ul>
    </div>
  )
}

export default Vegetable
