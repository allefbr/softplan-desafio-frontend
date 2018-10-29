import API from './api'

const headers = {headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}}

export const Buscar = (query) => API.get(`processo?q=${query}`)
export const BuscarPorID = (id) => API.get(`processo/${id}`)
export const Deletar = (id) => API.delete(`processo/${id}`)
export const Cadastrar = ( data ) => API.post(`processo`, data, headers)