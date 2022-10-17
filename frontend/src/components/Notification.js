import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(({ notification }) => notification)
  console.log(notification)
  if (notification === null) {
    return null
  }
  const style = {
    background: notification.type === 'alert' ? 'red' : 'green',
  }
  return <div style={style}>{notification.message}</div>
}

export default Notification
