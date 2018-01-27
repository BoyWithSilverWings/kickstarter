import {LOCATIONS} from '../constants';

function search(data, keyword) {
  return data.filter(item=>item.includes(keyword));
}

function sort(data, keyword, direction) {
  return data.sort((a,b)=>a[keyword]-b[keyword]);
}

function filter(data, keyword) {
  return data.filter(item=>item.location===keyword);
}

