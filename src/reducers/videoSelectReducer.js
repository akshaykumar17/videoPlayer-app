import { SELECT_VIDEO } from '../actions/constants';

const videoSelect = (state = null, action) => {
    switch (action.type) {
        case SELECT_VIDEO:
            return action.selectedVideo;
        default:
            return state;
    }
}

export default videoSelect