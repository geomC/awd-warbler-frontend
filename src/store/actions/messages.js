import {apiCall} from "../../services/api";
import {addError} from "./errors";
import {LOAD_MESSAGES, REMOVE_MESSAGES} from "../actionTypes";

export const loadMessages = messages => ({
    type: LOAD_MESSAGES,
    messages
});


export const fetchMessages = () => {
  return dispatch => {
      return apiCall('get', '/api/messages')
          .then((res) => dispatch(loadMessages(res)))
          .catch(err => addError(err.message))
  }
};

export const postNewMessage = text => {
  return (dispatch, getState) => {
      const {currentUser} = getState();
      return apiCall('post', `/api/users/${currentUser.user.id}/messages`,  {text } )
          .then((res) => dispatch(loadMessages(res)))
          .catch(err => addError(err.message))
  }
};

export const removeMessages = id => ({
    type: REMOVE_MESSAGES,
    id
});

export const removeMessage = id => {
    return (dispatch, getState) => {
        const {currentUser} = getState();
        return apiCall('delete', `/api/users/${currentUser.user.id}/messages/` + id)
            .then((res) => dispatch(removeMessages(res._id)))
            .catch(err => addError(err.message))
    }
};