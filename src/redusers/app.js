import { SET_AUTH } from "../actions/actionType"
const initialState = {
    isLoggedIn: false,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_AUTH: {
            console.log({ payload });
            return {
                ...state,
                isLoggedIn: payload
            }
        }
        default: return state;
    }
}