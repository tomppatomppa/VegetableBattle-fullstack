import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(({ notification }) => notification)

  if (notification === null) {
    return null
  }
  const style = {
    background: notification.type === 'alert' ? 'indianred' : 'lightgreen',
  }
  return <div style={style}>{notification.message}</div>
}

export default Notification
