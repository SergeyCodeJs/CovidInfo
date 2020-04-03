import { REQUEST_DATA, RECEIVE_DATA, RUSSIAN_CITIES_TOGGLE, RUSSIAN_CITIES_SEARCH, RUSSIAN_CITIES_CLOSE } from '../../actions/actionTypes'
import {info} from '../../utils/data'

const initialState = {
  isFetch: false,
  russianCityToggler: false,
  urls: {
    common: 'https://covid19.mathdro.id/api/',
    countries: 'https://covid19.mathdro.id/api/countries',
    confirmed: "https://covid19.mathdro.id/api/confirmed",
    recovered: "https://covid19.mathdro.id/api/recovered",
    deaths: "https://covid19.mathdro.id/api/deaths",
    dailySummary: "https://covid19.mathdro.id/api/daily",
    russia: "https://covid19.mathdro.id/api/countries/russia",
    russiaConfirmed: 'https://covid19.mathdro.id/api/countries/russia/confirmed',
    russiaRecovered: 'https://covid19.mathdro.id/api/countries/russia/recovered',
    russiaDeaths: 'https://covid19.mathdro.id/api/countries/russia/deaths'
  },
    rusRegions: info,
    rusRegionsForFilter: info.slice()
}


export default function mainReducer(state = initialState, action) {
  const map = action.map
  switch(action.type) {
    case REQUEST_DATA:
      return Object.assign({}, state, {
        isFetch: true
      })
    case RECEIVE_DATA: 
      return Object.assign({}, state, {
        isFetch: false,
        [action.stateDataName]: action.dataName,
        lastUpdated: action.receivedAt
      })
    case RUSSIAN_CITIES_TOGGLE: 
      return  Object.assign({}, state, {
        russianCityToggler: true
      })
    case RUSSIAN_CITIES_SEARCH:
      return Object.assign({}, state, {
        rusRegionsForFilter: action.rusRegionsForFilter
      })
    case RUSSIAN_CITIES_CLOSE:
      return  Object.assign({}, state, {
        russianCityToggler: false
      })
    default: return state
  } 
}