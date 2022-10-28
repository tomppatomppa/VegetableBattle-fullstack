import axios from 'axios';

const baseUrl = 'api/vegetables';

const getAll = async () => {
  const request = await axios.get(baseUrl);
  return request.data;
};

const create = async (newObject) => {
  const object = { name: newObject };

  const response = await axios.post(baseUrl, object);
  return response.data;
};

const updateStats = async (data) => {
  const response = await axios.put(baseUrl, data);
  return response.data;
};
// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, updateStats };
