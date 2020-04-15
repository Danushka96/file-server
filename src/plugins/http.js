import axios from "axios";

const BASEURL = "http://localhost:8099";

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
