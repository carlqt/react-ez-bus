import axios from 'axios';
import { DETECTED_NEARBY_STATIONS } from '../reducers/stations_reducer';
import { FETCH_BUS_STATION } from '../reducers/station_reducer';

const URL = "http://localhost:8000"

export function detectNearbyStations(lat, lng) {
  return dispatch => {
    axios.get(`${URL}/nearby?lat=${lat}&lng=${lng}`)
      .then(function(response) {
        dispatch({type: DETECTED_NEARBY_STATIONS, payload: response.data});
      })
      .catch(function(response) {
      })
  }
}

export function fetchBusStationDetails(stationCode) {
  return dispatch => {
    axios.get(`${URL}/station/${stationCode}/arrivals`)
      .then((response) => {
        dispatch({type: FETCH_BUS_STATION, payload: response.data, stationCode});
      })
      .catch(function(response) {
      })
  }
}
