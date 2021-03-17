import { EXPLORE } from "../constants";

const initState = {
    err: null,
    isLoading: false,
    explore: {},
}

const exploreReducer = (state = initState, action) => {
    switch (action.type) {

        case EXPLORE.EXPLORE_INIT:
            return {
                ...state,
                isLoading: true,
            }

        case EXPLORE.EXPLORE_SUCCESS:
            return {
                ...initState,
                isLoading: false,
                explore: action.explore,
            }

        case EXPLORE.EXPLORE_ERROR:
            return {
                ...initState,
                isLoading: false,
                err: action.err,
            }

        default:
            return state;
    }
};

export default exploreReducer;