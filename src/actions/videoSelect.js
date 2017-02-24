import { SELECT_VIDEO } from './constants';

const videoSelect = (video) => {

    return{
        type: SELECT_VIDEO,
        selectedVideo: video
    };
}

export default videoSelect 