import Vue from 'vue'
import Vuex from 'vuex'
import http from "../plugins/http";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      files: [],
      type: 'movies',
  },
  mutations: {
      SET_FILES(state, files) {
          state.files = files;
      },
      SET_TYPE(state, type) {
          state.type = type;
      }
  },
    actions: {
        getFiles({commit}) {
            http.getFiles().then(response => {
                commit('SET_FILES', response.data)
            })
        }
    },
    modules: {},
    getters: {
        getFiles: state => {
            return state.files
        },
        getType: state => {
            return state.type
        }
    }
})
