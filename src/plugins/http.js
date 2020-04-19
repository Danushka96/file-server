import axios from "axios";
import config from "../config"

const BASEURL = config.BASEURL;

export default {
    getFiles() {
        return axios.get(`${BASEURL}/files`);
    },
    getBaseURL() {
        return BASEURL;
    },
    deleteFile(id) {
        return axios.delete(`${BASEURL}/files/${id}`)
    }
}
