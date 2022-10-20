import { createHighscore } from '../reducers/highscoreReducer'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { createNotification } from '../reducers/notificationReducer'
import { useEffect, useState } from 'react'

import { GiBroadsword } from 'react-icons/gi'
import { AiFillHeart } from 'react-icons/ai'
import { BsFillShieldFill } from 'react-icons/bs'
import { GiAxeSwing } from 'react-icons/gi'
import { GiWoodStick } from 'react-icons/gi'

{
  /* rightSide variable reverses flex container */
}
const Vegetable = ({ data, select, rightSide }) => {
  const highscores = useSelector((state) => state.highscores)
  const [color, setColor] = useState('')
  const [hitAnimation, setHitAnimation] = useState(false)
  let animationDirection = rightSide ? 'animate-wiggleLeft' : 'animate-wiggle'

  const dispatch = useDispatch()

  useEffect(() => {
    setColor('red')
    setHitAnimation(true)
    setTimeout(() => {
      setColor('')
      setHitAnimation(false)
    }, 200)
  }, [data])

  if (!data) {
    return null
  }

  /*
  check if vegetable already exists in highscores 
  */
  const found = [...highscores].find(
    (vegetable) => vegetable.name === data.Name
  )
  const notify = (message, type = 'info') => {
    dispatch(createNotification({ message, type }, 4))
  }

  const handleSelect = async (data) => {
    //return false if dublicate player
    if (!select(data)) {
      notify('Cannot fight yourself', 'alert')
      return
    }
    if (!found) {
      dispatch(createHighscore(data.Name))
    }
    notify(`Vegetable named ${data.Name} joined!`)
  }

  return (
    <div>
      <li className="flex animate-pulse">
        {select && (
          <button className="btn" onClick={() => handleSelect(data)}>
            select
          </button>
        )}
      </li>
      <div className="flex">
        <div className={`${rightSide && 'order-last '} flex flex-col card`}>
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
        <div className={`${hitAnimation && animationDirection}  mx-auto `}>
          <MovingIcon icon={<GiWoodStick size="40" />} />
        </div>
      </div>
    </div>
  )
}
const PowerIcon = ({ icon, text = '', value, color = 'black' }) => {
  return (
    <div
      className={`flex m-2 text-black animate-${
        color === 'red' ? 'ping text-red-900 scale-125' : 'none'
      }`}
    >
      {icon}
      {`${text}:  `}
      {value}
    </div>
  )
}
const MovingIcon = ({ icon }) => {
  return <div className={`mt-20`}>{icon}</div>
}
export default Vegetable
