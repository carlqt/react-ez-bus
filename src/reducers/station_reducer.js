import Immutable from 'immutable';

export const FETCH_BUS_STATION = 'FETCH_BUS_STATION';

const INITIAL_STATE = Immutable.fromJS({
  buses: [],
  errors: null,
  loading: true,
});

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_BUS_STATION:
    action.payload.loading = false;
    return state.merge(action.payload)
  default:
    return state;
  }
}
