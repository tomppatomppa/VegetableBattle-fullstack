const Vegetable = ({ data, select }) => {
  return (
    <div>
      <ul>
        <li>
          Name: {data.Name}{' '}
          {select && <button onClick={() => select(data)}>select</button>}
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
