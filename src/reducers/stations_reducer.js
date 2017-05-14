import Immutable from 'immutable';

export const DETECTED_NEARBY_STATIONS = 'DETECTED_NEARBY_STATIONS';
export const INITIAL_STATE = Immutable.fromJS({
  stations: [],
  errors: null,
  loading: true,
});

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case DETECTED_NEARBY_STATIONS:
    action.payload.loading = false;
    return state.merge(action.payload)
  default:
    return state;
  }
}
