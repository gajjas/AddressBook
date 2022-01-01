import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  contacts: [],
  selectedContact: null
}

export const mutations = {
  setContacts(state, payload) {
    state.contacts = payload
  },
  setSelectedContact(state, payload) {
    state.selectedContact = payload
  }
}

export const actions = {
  getContacts(context) {
    axios.get("https://randomuser.me/api/?results=25&seed=myseed", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        let arr = response.data.results
        arr.sort((a, b) => (a.name.first > b.name.first) ? 1 : (a.name.first === b.name.first) ? ((a.name.last > b.name.last) ? 1 : -1) : -1)
        context.commit('setContacts', arr)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
