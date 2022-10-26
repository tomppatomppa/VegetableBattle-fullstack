import axios from 'axios';

const baseUrl = 'api/vegetables';

const findVegetable = async (filter) => {
  const object = { search: filter };
  const result = await axios.post(baseUrl, object);
  return result;
};
export default { findVegetable };
