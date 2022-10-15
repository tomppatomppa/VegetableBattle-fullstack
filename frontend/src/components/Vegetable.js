import { calculateStats } from '../utils/helpers'

const Vegetable = ({ data }) => {
  const stats = calculateStats(data)
  return (
    <div>
      <ul>
        <li>Name: {stats.Name}</li>
        <li>Health: {stats.Health}</li>
        <li>Attack: {stats.Attack}</li>
        <li>Defence: {stats.Defence}</li>
        <li>Delay: {stats.Delay}</li>
      </ul>
    </div>
  )
}

export default Vegetable
