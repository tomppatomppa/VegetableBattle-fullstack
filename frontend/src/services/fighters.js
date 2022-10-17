import axios from 'axios'

const baseUrl = 'api/fighters'

const getAll = async () => {
  const request = await axios.get(baseUrl)
  return request.data
}

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

const updateStats = async (data) => {
  const response = await axios.put(baseUrl, data)
  return response.data
}
export default { getAll, create, updateStats }
