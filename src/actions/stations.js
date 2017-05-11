import axios from 'axios';
import { DETECTED_NEARBY_STATIONS } from '../reducers/stations_reducer';

const URL = "http://localhost:8000/nearby"

export function detectNearbyStations(lat, lng) {
  return dispatch => {
    axios.get(`${URL}?lat=${lat}&lng=${lng}`)
      .then(function(response) {
        dispatch({type: DETECTED_NEARBY_STATIONS, payload: response.data});
      })
      .catch(function(response) {
      })
  }
}
