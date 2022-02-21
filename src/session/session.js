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
