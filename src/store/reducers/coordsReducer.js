import { COORDS } from "../constants";

const initState = {
    error: null,
    isloading: false,
    coords: { latitude: 0, longitude: 0 },
}

const coordsReducer = (state = initState, action) => {
    switch (action.type) {

        case COORDS.COORDS_SUCCESS:
            return {
                ...state,
                coords: action.coords,
            }

        default:
            return state;
    }
};

export default coordsReducer;