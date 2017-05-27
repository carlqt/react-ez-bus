import axios from 'axios';
import {
  DETECTED_NEARBY_STATIONS,
  FETCH_BUS_STATION,
  ALL_STATIONS
} from '../constants';

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

export function fetchBusStationDetails(stationCode, type = FETCH_BUS_STATION) {
  return dispatch => {
    axios.get(`${URL}/station/${stationCode}/arrivals`)
      .then((response) => {
        dispatch({type, payload: response.data, stationCode});
      })
      .catch(function(response) {
      })
  }
}

export function allStations() {
  return dispatch => {
    axios.get(`${URL}/stations`)
      .then(function(response) {
        dispatch({type: ALL_STATIONS, payload: response.data});
      })
      .catch(function(response) {
      })
  }
}