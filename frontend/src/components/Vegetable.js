import vegetableService from '../services/fighters'

const Vegetable = ({ data, select }) => {
  /*
  Add vegetable if it doesn't exists in database
  */
  const handleSelect = async (data) => {
    select(data)
    vegetableService
      .create({ name: data.Name })
      .then((createdVegetable) => {
        console.log(createdVegetable.Name, 'created')
      })
      .catch((error) => {
        console.log(error.message)
      })
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
