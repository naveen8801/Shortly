import axios from 'axios';

const url = 'https://api.shrtco.de/v2';

export const GetShortUrl = (link) => axios.get(`${url}/shorten?url=${link}`);