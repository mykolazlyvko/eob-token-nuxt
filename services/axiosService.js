import axios from "axios";

axios.defaults.headers.common["Content-Type"] = "application/json";

export const axiosService = (function () {
    // let AuthorizationToken = null;

    function addHeaders(userConfig, token = null) {
        const globalHeaders = {};

        if (localStorage.getItem("EOBO_TOKEN")) {
            globalHeaders["Authorization"] = `Bearer ${localStorage.getItem(
                "EOBO_TOKEN"
            )}`;
        }

        if (token != null) {
            globalHeaders["Authorization"] = `Bearer ${token}`;
        }

        const { headers } = userConfig;

        return {
            headers: {
                ...globalHeaders,
                ...headers,
            },
        };
    }

    // function setAuthorizationToken(token) {
    //   AuthorizationToken = token;
    // }

    function get(endPoint, userConfig = {}) {
        return axios.get(endPoint, addHeaders(userConfig));
    }

    function post(endPoint, params = {}, userConfig = {}, token = null) {
        return axios.post(endPoint, params, addHeaders(userConfig, token));
    }

    function patch(endPoint, params = {}, userConfig = {}) {
        return axios.patch(endPoint, params, addHeaders(userConfig));
    }

    function put(endPoint, params = {}, userConfig = {}) {
        return axios.put(endPoint, params, addHeaders(userConfig));
    }

    function del(endPoint, userConfig = {}) {
        return axios.delete(endPoint, addHeaders(userConfig));
    }

    return {
        // setAuthorizationToken,
        get,
        post,
        put,
        patch,
        del,
    };
})();
