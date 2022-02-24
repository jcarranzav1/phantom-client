import { clearSession, setSession } from '../session/session';
import { types } from '../types/types';
import { blankState } from './authState';

function reducer(state = {}, action) {
  let draft;

  switch (action.type) {
  case types.userSignin:
    draft = {
      ...state,
      user: action.payload.user,
    };
    setSession(action.payload.token);
    break;

  case types.userSignout:
    draft = {
      ...state,
      user: blankState.user,
    };
    clearSession();

    break;

  case types.update:
    draft = {
      ...state,
      user: Object.assign(state.user, action.payload),
    };
    break;

  default:
    throw new Error();
  }
  localStorage.setItem('state', JSON.stringify(draft));
  return draft;
}
export default reducer;
