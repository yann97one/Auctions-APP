import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.post['Content-Type'] = 'application/json';


export const request = (method: string, url: string, data: any): Promise<any> => {
    return axios({
        method: method,
        url: url,
        data: data,
        // headers: {
        //     "Authorization": "Bearer " + window.localStorage.getItem("auth_token")
        // }
    }).then(response => response.data)
}