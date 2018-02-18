import { getPeople, getCharacter } from '../../api'

const GET_DATA = 'GET_DATA'
const GET_DATA_OK = 'GET_DATA_OK'
const GET_DATA_ERR = 'GET_DATA_ERR'
const GET_CHARACTER = 'GET_CHARACTER'
const GET_CHARACTER_OK = 'GET_CHARACTER_OK'
const GET_CHARACTER_ERR = 'GET_CHARACTER_ERR'

const initialState = []

export function getData() {
  return (dispatch) => {
      dispatch({
      type: 'GET_DATA',
      data: []
    })
    getPeople()
      .then(responce => {
        dispatch({
            type: 'GET_DATA_OK',
            data: responce.data.results
          })
        })
      }
    }

export function getCharacterInfo(id) {
  return (dispatch) => {
      dispatch({
      type: 'GET_CHARACTER',
      data: []
    })
    getCharacter(id)
      .then(responce => {
          dispatch({
            type: 'GET_CHARACTER_OK',
            data: responce.data
          })
        })
      }
    }

export default function (state = initialState, action) {

switch (action.type) {
  case GET_DATA:
    return { ...state, content: [] }
  case GET_DATA_OK:
    return { ...state, content: action.data }
  case GET_CHARACTER:
  case GET_CHARACTER_OK:
      return { ...state, caracter: action.data }
  default:
      return state;
  }
}
