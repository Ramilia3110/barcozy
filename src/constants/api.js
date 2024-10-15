// src/constants/api.js
const API = "https://www.thecocktaildb.com/api/json/v1/1/";
export const GET_ALL_COCKTAILS = `${API}filter.php?c=Cocktail`;
export const GET_BY_NAME = API + `search.php?s=`;
export const GET_BY_FILTER = `${API}filter.php?a=`;
export const GET_DETAIL = `${API}lookup.php?i=`;
export const GET_INGREDIENT = `${API}search.php?i=`;
export const GET_RANDOM = `${API}random.php`;
