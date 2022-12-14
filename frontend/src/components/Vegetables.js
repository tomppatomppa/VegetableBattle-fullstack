import { useState, useEffect } from 'react';
import { calculateStats, filterArray } from '../utils/helpers';
import Togglable from './Togglable';
import Vegetable from './Vegetable';
import fineliService from '../services/fineli';

const Vegetables = ({ select }) => {
  const [vegetables, setVegetables] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const search = async () => {
      fineliService.findVegetable(filter).then(({ data }) => {
        setVegetables([...filterArray(data)]);
      });
    };
    if (filter) {
      search();
    }
  }, [filter]);

  return (
    <div>
      <span>Search Vegetable (FI)</span>
      <input
        className="input"
        onChange={(e) => setFilter(e.target.value)}
      ></input>
      <div className="bg-blue-400 w-72 absolute opacity-95 rounded-md">
        {vegetables.map((vegetable) => (
          <div key={vegetable.id} className="text-xs mb-2 ">
            <Togglable buttonLabel="show stats" name={vegetable.name.fi}>
              <Vegetable data={calculateStats(vegetable)} select={select} />
            </Togglable>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vegetables;
