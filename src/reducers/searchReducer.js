import { SEARCH_VIDEO } from '../actions/constants';

const search = (state = [], action) => {
    switch (action.type) {
        case SEARCH_VIDEO:
            return action.payload.data.items;
        default:
            return state;
    }
}

export default search;