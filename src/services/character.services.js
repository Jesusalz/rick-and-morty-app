import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || "https://rickandmortyapi.com/api/character";

export const getCharacters = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};

export const getCharacterById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching character information:', error);
    throw error;
  }
};

export const getCharactersInfo = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.info;
  } catch (error) {
    console.error('Error fetching characters info:', error);
    throw error;
  }
};

export const searchCharacters = async (query) => {
  try {
    const response = await axios.get(`${API_URL}?name=${query}`);
    return response.data;
  } catch (error) {
    console.error('Error searching characters:', error);
    throw error;
  }
};
