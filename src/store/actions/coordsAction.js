import { COORDS } from "../constants"

export const successCoords = (coords) => ({
    type: COORDS.COORDS_SUCCESS,
    coords: coords
})
