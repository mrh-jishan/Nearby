import { EXPLORE } from "../constants"

export const initExplore = () => ({
    type: EXPLORE.EXPLORE_INIT
})

export const successExplore = (explore) => ({
    type: EXPLORE.EXPLORE_SUCCESS,
    explore: explore
})

export const errorExplore = (err) => ({
    type: EXPLORE.EXPLORE_ERROR,
    err: err
})

