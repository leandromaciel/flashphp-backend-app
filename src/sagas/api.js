import axios from 'axios'

export function postApi(url, loginData) {
    return axios.post(url, loginData)
    .then(function (response) {
      return {
        success: true,
        data: response.data
      }
    })
    .catch(function (error) {
      return {
        error: true,
        error_message: error
      }
    });
}