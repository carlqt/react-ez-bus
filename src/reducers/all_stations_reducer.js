import Immutable from 'immutable';

import { ALL_STATIONS } from '../constants';

export const INITIAL_STATE = Immutable.fromJS({
  stations: [],
  errors: null,
  loading: true,
});

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case ALL_STATIONS:
    action.payload.loading = false;
    return state.merge(action.payload);
  default:
    return state;
  }
}
