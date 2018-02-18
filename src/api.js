import axios from 'axios'

export const getPeople = () => {
  return axios.get('https://swapi.co/api/people/')
}
export const getCharacter = (id) => {
    return axios.get(`https://swapi.co/api/people/${id}`)
}
  // const  myInint = {
  //     method: 'GET',
  //     mode: 'no-cors'
  //   }
  // return fetch('https://public.api.openprocurement.org/api/0/tenders/1', myInint)
