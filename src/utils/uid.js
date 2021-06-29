import { v4 as uuidv4 } from 'uuid';

let uid = localStorage.getItem('userTempId');

export default () => {
  if (!uid) {
    uid = uuidv4();
    localStorage.setItem('userTempId', uid);
  }

  return uid;
};
