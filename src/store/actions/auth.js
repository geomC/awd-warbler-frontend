import { apiCall} from "../../services/api";
import { SET_CURRENT_USER} from "../actionTypes";
import {addError, removeError} from "./errors";

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export function logout() {
    return dispatch => {
        localStorage.clear(); // remove token
        dispatch(setCurrentUser({})) // will remove currentUser
    }
}


export function authUser(type, userData) {
    return dispatch => {
        return new Promise(function (resolve, reject) {
            apiCall('post', `/api/auth/${type}`, userData)
                .then(({token, ...user}) => {
                    localStorage.setItem('jwtToken', token); // persist token
                    dispatch(setCurrentUser(user));
                    dispatch(removeError());
                    resolve()
                })
                .catch(err => {
                    dispatch(addError(err.message));
                    reject();
                });
        })
    }
}