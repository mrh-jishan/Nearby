import { COORDS } from "../constants"

/*
******************
****  Login ******
******************
*/

export const successCoords = (coords) => ({
    type: COORDS.COORDS_SUCCESS,
    coords: coords
})
