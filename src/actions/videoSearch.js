import axios from 'axios';
import { SEARCH_VIDEO } from './constants'
const API_KEY = 'AIzaSyCdLRbiKfl42CXxNWPTKbYgJu-97WcGuj0';
const ROOT_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}`;

const videoSearch = (term) => {
    const url = `${ROOT_URL}&q=${term}&type=video`;
    const request = axios.get(url);
    return {
        type: SEARCH_VIDEO,
        payload: request
    }
}

export default videoSearch