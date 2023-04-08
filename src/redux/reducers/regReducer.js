import { types } from "../types";

const initialState = {
    regStatus: false
}

export default function regReducer (state = initialState, action) {
    switch (action.type) {
        case types.STATUS_CHANGE:
            return {...state, regStatus: action.payload}
        case types.REVERS:
            return {...state, regStatus: false}


        default: return state
    }
}