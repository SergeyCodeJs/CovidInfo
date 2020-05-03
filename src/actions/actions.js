import { RECEIVE_DATA, REQUEST_DATA, CHANGE_MAP_DATA, RUSSIAN_CITIES_TOGGLE, RUSSIAN_CITIES_SEARCH, RUSSIAN_CITIES_CLOSE } from './actionTypes'


export function requestData() {
  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  let userLatitude;
  let userLongitude;
  
  function success(pos) {
    let crd = pos.coords;
  
    userLatitude = crd.latitude;
    userLongitude = crd.longitude;
  
    return [userLatitude, userLongitude]
  };
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };
  
  navigator.geolocation.getCurrentPosition(success, error, options);

  return {
    type: REQUEST_DATA,
    userCoordinates: [userLatitude, userLongitude]
  }
}

export function receiveData(json, url) {
  
  let dataName;
  switch (url) {
    case 'https://covid19.mathdro.id/api/':
    dataName = 'common';
    break;
    case 'https://covid19.mathdro.id/api/countries':
    dataName = 'countries';
    break;
    case "https://covid19.mathdro.id/api/confirmed":
    dataName = 'confirmed';
    break;
    case "https://covid19.mathdro.id/api/recovered":
    dataName = 'recovered';
    break;
    case "https://covid19.mathdro.id/api/deaths":
    dataName = 'deaths';
    break;
    case "https://covid19.mathdro.id/api/daily":
    dataName = 'dailySummary';
    break;
    case "https://covid19.mathdro.id/api/countries/russia":
    dataName = "russiaCommon";
    break;
    case "https://covid19.mathdro.id/api/countries/russia/confirmed":
    dataName = "russiaConfirmed";
    break;
    case "https://covid19.mathdro.id/api/countries/russia/recovered":
    dataName = "russiaRecovered";
    break;
    case "https://covid19.mathdro.id/api/countries/russia/deaths":
    dataName = "russiaDeaths";
    break;
    case "https://raw.githubusercontent.com/mediazona/data-corona-Russia/master/data.json":
    dataName = "RussianRegionsMediazona";
    break;
    case "https://api.github.com/repos/mediazona/data-corona-Russia":
    dataName = "MediaZonaUpdated";
    break;
    default: dataName = "unknown"
  }
  
  return {
    type: RECEIVE_DATA,
    dataName: json,
    stateDataName: dataName,
    receivedAt: Date.now()
  }
}


export function fetchData(url) {
  return function(dispatch) {
    dispatch(requestData())

    return fetch(url)
    .then(
      response => response.json(),
      error => console.log('error', error)
    )
    .then(
      json => dispatch(receiveData(json, url))
    )
  }
}


export function changeMapData() {
  return {
    type: CHANGE_MAP_DATA
  }
}

export function toggleRussianCities() {
  return {
    type: RUSSIAN_CITIES_TOGGLE
  }
}

export function closeRussianCities() {
  return {
    type: RUSSIAN_CITIES_CLOSE
  }
}

export function russianCitySearch(props, text, regions, initialRegions) {
  let newInitialRegions = {};
  newInitialRegions.startDate = initialRegions.startDate;

  let filtered = initialRegions.data.filter((region) => {

    let regionNames = region.name.toLowerCase();
    let inputText = text.toLowerCase();

    return regionNames.includes(inputText)
  })

  newInitialRegions.data = filtered
  
  return {
    type: RUSSIAN_CITIES_SEARCH,
    RussianRegionsMediazonaForFilter: newInitialRegions
  }
}
//'