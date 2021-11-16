import { SET_AUTH } from "./actionType";

export const setAuth = (auth) => ({
    type: SET_AUTH,
    payload: auth,
});