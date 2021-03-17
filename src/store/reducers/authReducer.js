import { LOGIN } from "../constants";

const initState = {
    error: null,
    isLoggedin: false,
    user: {},
    token: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {

        case LOGIN.AUTH_SUCCESS:
            return {
                ...state,
                isLoggedin: true,
                user: action.user,
                token: action.token
            }

        case LOGIN.LOGOUT:
            return {
                ...initState,
                isLoggedin: false,
            }

        default:
            return state;
    }
};

export default authReducer;