import Api from '../plugins/api/apiFunc';
import Url from '../plugins/api/url';
const actions = {
    async getUsers({ commit }, payload) {
        let res = await Api.get(Url.uesrs, payload);
        return res;
    }
}


export default {
    namespaced: true,
    actions
}