import axios from 'axios'
const server = `http://localhost:8000`
export const irisApi = req => axios.post(`${server}/shop/iris/iris`, req)
