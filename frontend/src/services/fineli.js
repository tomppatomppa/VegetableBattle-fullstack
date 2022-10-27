import axios from 'axios';

const baseUrl = 'api/fineli';

const findVegetable = async (filter) => {
  const result = await axios.post(baseUrl, { search: filter });
  return result;
};
// eslint-disable-next-line import/no-anonymous-default-export
export default { findVegetable };
