import axios from 'axios';

const baseUrl = 'api/fineli';

const findVegetable = async (filter) => {
  const object = { search: filter };

  const result = await axios.post(baseUrl, object);
  return result;
};
// eslint-disable-next-line import/no-anonymous-default-export
export default { findVegetable };
