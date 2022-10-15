import axios from 'axios'
import { useState, useEffect } from 'react'
import Togglable from './Togglable'

import Vegetable from './Vegetable'

const Vegetables = () => {
  const [vegetables, setVegetables] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log(filter)
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
        {vegetables.map((item) => (
          <Togglable buttonLabel="show stats" name={item.name.fi}>
            <Vegetable data={item} />
          </Togglable>
        ))}
      </div>
    </div>
  )
}

export default Vegetables
