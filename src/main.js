import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

import VuexStore from './store'
const store = new Vuex.Store(VuexStore)

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})