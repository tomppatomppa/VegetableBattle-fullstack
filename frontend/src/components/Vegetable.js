import { createHighscore } from '../reducers/highscoreReducer'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
const Vegetable = ({ data, select }) => {
  const highscores = useSelector((state) => state.highscores)
  const dispatch = useDispatch()
  const found = [...highscores].find(
    (vegetable) => vegetable.name === data.Name
  )
  console.log(found)
  /*
  Add vegetable if it doesn't exists in database
  */
  const handleSelect = async (data) => {
    select(data)
    if (!found) {
      dispatch(createHighscore(data.Name))
    } else {
      console.log('already in db')
    }
  }

  return (
    <div>
      <ul>
        <li>
          Name: {data.Name}{' '}
          {select && <button onClick={() => handleSelect(data)}>select</button>}
        </li>
        <li>Health: {data.Health}</li>
        <li>Attack: {data.Attack}</li>
        <li>Defence: {data.Defence}</li>
        <li>Delay: {data.Delay}</li>
      </ul>
    </div>
  )
}

export default Vegetable
