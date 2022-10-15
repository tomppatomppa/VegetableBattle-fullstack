import axios from 'axios'
import { useState, useEffect } from 'react'
import { calculateStats } from '../utils/helpers'
import Togglable from './Togglable'

import Vegetable from './Vegetable'

const Vegetables = ({ select }) => {
  const [vegetables, setVegetables] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const search = async () => {
      const url = `https://fineli.fi/fineli/api/v1/foods?q=${filter}`
      axios.get(url).then(({ data }) => {
        const filter = data.filter(
          (item) => item.type.abbreviation.fi === 'Raaka-aine'
        )
        setVegetables([...filter])
      })
    }
    if (filter) search()
  }, [filter])

  return (
    <div>
      <input onChange={(e) => setFilter(e.target.value)}></input>
      <div>
        {vegetables.map((vegetable) => (
          <Togglable
            key={vegetable.id}
            buttonLabel="show stats"
            name={vegetable.name.fi}
          >
            <Vegetable data={calculateStats(vegetable)} select={select} />
          </Togglable>
        ))}
      </div>
    </div>
  )
}

export default Vegetables
