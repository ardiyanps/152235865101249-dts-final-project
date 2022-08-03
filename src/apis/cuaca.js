import axios from 'axios';

const urlBekasi = 'https://ibnux.github.io/BMKG-importer/cuaca/5002228.json';
const ulrJaktim = 'https://ibnux.github.io/BMKG-importer/cuaca/501191.json';
const ulrJakbar = 'https://ibnux.github.io/BMKG-importer/cuaca/501192.json';
const ulrJaksel = 'https://ibnux.github.io/BMKG-importer/cuaca/501193.json';
const ulrJakkep = 'https://ibnux.github.io/BMKG-importer/cuaca/501194.json';
const ulrJakpus = 'https://ibnux.github.io/BMKG-importer/cuaca/501195.json';
const ulrJakut = 'https://ibnux.github.io/BMKG-importer/cuaca/501196.json';

const cuacaBekasi = axios.create({
  baseURL: urlBekasi,
});

export const cuacaJaktim = axios.create({
    baseURL: ulrJaktim,
  });

export const cuacaJakbar = axios.create({
    baseURL: ulrJakbar,
  });

export const cuacaJaksel = axios.create({
    baseURL: ulrJaksel,
  });
  
export const cuacaJakkep = axios.create({
    baseURL: ulrJakkep,
  });

export const cuacaJakpus = axios.create({
    baseURL: ulrJakpus,
  });

export const cuacaJakut = axios.create({
    baseURL: ulrJakut,
  });

export default cuacaBekasi;
