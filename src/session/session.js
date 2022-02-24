import { TOKEN_KEY } from './consts';

export function setSession(payload) {
  localStorage.setItem(TOKEN_KEY, payload);
}

export function getSession() {
  return localStorage.getItem(TOKEN_KEY);
}

export function clearSession() {
  localStorage.removeItem(TOKEN_KEY);
}

export function getState() {
  return JSON.parse(localStorage.getItem('state'));
}

export function setState(payload) {
  localStorage.setItem('state', JSON.stringify(payload));
}
