import axios from "axios";

const makeApiRequest = (method, url, data, headers, params) =>
    new Promise((resolve, reject) => {
        const userAuthToken = localStorage.getItem("userAuthToken")
        const options = {
            ...{
                method,
                url,
                data,
                headers,
                params
            },
            ...(userAuthToken && { headers: { 'authorization': `Bearer ${userAuthToken}` } })
        }
        if (headers) {
            options.headers = { ...options.headers, ...headers }
        }
        axios(options)
            .then((response) => {
                if (response.status === 200 || response.status === 201) {
                    resolve(response)
                }
                else {
                    reject(response)
                }
            })
            .catch((error) => {
                reject(error);
            });
        return null;
    })

export default makeApiRequest