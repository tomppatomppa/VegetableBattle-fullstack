import Togglable from './Togglable'
const dummy = [
  {
    id: 1,
    name: 'Tomaatti',
    wins: 1,
    ties: 0,
    losses: 2,
    status: ['IDLE', 'STANDBY', 'ACTIVE'],
  },
  {
    id: 2,
    name: 'Paprika',
    wins: 3,
    ties: 0,
    losses: 1,
    status: ['IDLE', 'STANDBY', 'ACTIVE'],
  },
]
const Higscores = () => {
  return (
    <div>
      <h1>Highscores</h1>
      {dummy.map((item) => (
        <div key={item.id}>
          <Togglable name={`${item.name} ${item.wins}`} buttonLabel="Details">
            {item.name} {'Battles Won'} {item.wins}
          </Togglable>
        </div>
      ))}
    </div>
  )
}

export default Higscores
