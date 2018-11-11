import axios from 'axios';

export function apiCall(method, path, data) {
    return new Promise(function (resolve, reject) {
        return axios[method](path, data)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.response.data.error)
        })
    })
}