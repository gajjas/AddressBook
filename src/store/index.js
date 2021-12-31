import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: [],
    selectedContact: null
  },
  mutations: {
    setContacts (state, payload) {
      state.contacts = payload
    },
    setSelectedContact(state, payload){
      state.selectedContact = payload
    }
  },
  actions: {
    getContacts(context){
      axios.get("https://randomuser.me/api/?results=25&seed=myseed", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        context.commit('setContacts', response.data.results)
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
})
