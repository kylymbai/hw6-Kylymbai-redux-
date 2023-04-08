import { types } from "./types";
import axios from "axios";

export const changeStatusAction = (regStatus) => {
    return {
      type: types.STATUS_CHANGE,
      payload: regStatus,
    }
}

export const usersInfoAction = (nameValue,usernameValue,emailValue,websiteValue) => {
    return async function (dispatch) {
        try {
            const user = await axios.post('https://jsonplaceholder.typicode.com/users',
            {
                name: nameValue,
                username: usernameValue,
                email: emailValue,
                website: websiteValue,
            })
            console.log(user.data)
            if(user.status > 200){
                dispatch(changeStatusAction(true))
            };  
        }catch {
            dispatch(changeStatusAction(false))
        }
    }
}

const changeRevers = () => {
    return {
        type: types.REVERS
    }
}

export const changeReversAction = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(changeRevers())
        }, 5000)
    }
}