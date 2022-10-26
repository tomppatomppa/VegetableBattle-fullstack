import axios from 'axios';
import { useState, useEffect } from 'react';
import { calculateStats, filterArray } from '../utils/helpers';
import Togglable from './Togglable';
import Vegetable from './Vegetable';

const Vegetables = ({ select }) => {
  const [vegetables, setVegetables] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const url = `https://fineli.fi/fineli/api/v1/foods?q=${filter}`;
    let config = {
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': 'http://localhost:3001',
        'Access-Control-Allow-Methods': 'GET',
      },
    };
    const search = async () => {
      axios.get(url, { config }).then(({ data }) => {
        setVegetables([...filterArray(data)]);
      });
    };
    if (filter) {
      search();
    }
  }, [filter]);

  return (
    <div>
      <span>Search Vegetable</span>
      <input
        className="input"
        onChange={(e) => setFilter(e.target.value)}
      ></input>
      <div className="bg-blue-400 w-72 absolute opacity-95 rounded-md">
        {filter &&
          vegetables.map((vegetable) => (
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
