import {compareAsc} from 'date-fns';

function search(data, keyword) {
  return data.filter(item=>item.title.toLowerCase().includes(keyword.toLowerCase()));
}

function sort(data, keyword, direction) {
  if(direction==='asc')
    return data.sort((a,b) => a[keyword]-b[keyword]);
  else 
    return data.sort((a, b) => b[keyword] - a[keyword]);
}

function sortByDate(data, keyword, direction) {
  if(direction==='asc')
    return data.sort((a,b) => compareAsc(a[keyword],b[keyword]));
  else 
    return data.sort((a, b) => compareAsc(b[keyword], a[keyword]));
}

function fliter(data, keyword) {
  return data.filter(item => item.location===keyword);
}

function applyFilters(data, filter) {
  const searchArray = filter.search?search(data, filter.search):data;
  const filteredArray = filter.filter?fliter(searchArray, filter.filter):searchArray;
  let sortedArray = filteredArray;
  if(filter.sort) {
    if(filter.sort.key==='progress') {
      sortedArray = sort(filteredArray, 'percentage.funded', filter.sort.value);
    } 
    else if(filter.sort.key==='end') {
      sortedArray = sortByDate(filteredArray, 'end.time', new Date(filter.sort.value));
    }
  }
  return sortedArray;
}

export default applyFilters;

