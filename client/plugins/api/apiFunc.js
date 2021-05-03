import Axios from 'axios';
let axios = Axios.create({
    baseURL: 'https://606bd286f8678400172e69cc.mockapi.io/api/v1',
    timeout: 0,
    withCredentials: false
});

let Api = {
    get: async function(url, params) {
        return await axios.get(url, params).then((res) => {
            return res.data;
        }).catch((error) => {
            console.log(error)
        })
    }
}

export default Api;