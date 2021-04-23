import { LOGIN } from "../constants"


export const initLogin = () => ({
    type: LOGIN.INIT_AUTH
})

export const successLogin = (user, token) => ({
    type: LOGIN.AUTH_SUCCESS,
    user: user,
    token: token
})

export const logoutAction = () => ({
    type: LOGIN.LOGOUT
})
