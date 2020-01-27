import { ARCHIEVE_CHANGE } from '../constants';
export function change(archieve) {
  return {
    type: ARCHIEVE_CHANGE,
    payload: archieve
  }
}