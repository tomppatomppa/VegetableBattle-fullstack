import { createHighscore } from '../reducers/highscoreReducer'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { createNotification } from '../reducers/notificationReducer'
import { useEffect, useState } from 'react'

import { GiBroadsword } from 'react-icons/gi'
import { AiFillHeart } from 'react-icons/ai'
import { BsFillShieldFill } from 'react-icons/bs'
import { GiAxeSwing } from 'react-icons/gi'

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
    <ul className="text-left">
      <li className=" flex justify-end animate-pulse ">
        {select && (
          <button className="btn " onClick={() => handleSelect(data)}>
            select
          </button>
        )}
      </li>
      <div className="flex flex-col card">
        <PowerIcon
          icon={<AiFillHeart size="20" />}
          text="Health"
          value={data.Health}
          color={color}
        />
        <PowerIcon
          icon={<GiBroadsword size="20" />}
          text="Attack"
          value={data.Attack}
        />
        <PowerIcon
          icon={<BsFillShieldFill size="20" />}
          text="Defence"
          value={data.Defence}
        />
        <PowerIcon
          icon={<GiAxeSwing size="20" />}
          text="Delay"
          value={data.Delay}
        />
      </div>
    </ul>
  )
}
const PowerIcon = ({ icon, text = '', value, color = 'black' }) => {
  return (
    <div
      className={`flex m-2 text-${color}-900 animate-${
        color === 'red' ? 'ping' : 'none'
      }`}
    >
      {icon}
      {`${text}:  `}
      {value}
    </div>
  )
}
export default Vegetable
