import { combineReducers } from 'redux';
import searchVideo from './searchReducer';
import videoSelect from './videoSelectReducer';

const youtubeApp = combineReducers({
   videos: searchVideo,
   selectedVideo: videoSelect
});

export default youtubeApp;