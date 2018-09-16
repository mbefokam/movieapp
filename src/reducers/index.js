import {MOVIES} from '../actions';

export default function movies (state, action){
  switch (action.type) {
    case MOVIES:
      console.log("Movies are ",action.items);
      break;
    default:
      return state;
  }
}
