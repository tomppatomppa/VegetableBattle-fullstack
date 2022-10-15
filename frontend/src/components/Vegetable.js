import { calculateStats } from '../utils/helpers'
const Vegetable = ({ data }) => {
  calculateStats(data)
  return (
    <div>
      <ul>{data.name.fi}</ul>
    </div>
  )
}

export default Vegetable
