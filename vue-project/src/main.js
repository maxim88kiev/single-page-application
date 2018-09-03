import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
	  fb.initializeApp({
		  apiKey: 'AIzaSyAlVxFYZQq8gR2cesvsW_YX7aO7i5dkKWY',
		  authDomain: 'itc-ads-cf969.firebaseapp.com',
		  databaseURL: 'https://itc-ads-cf969.firebaseio.com',
		  projectId: 'itc-ads-cf969',
		  storageBucket: 'itc-ads-cf969.appspot.com',
		  messagingSenderId: '733564359493'
	  })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
})
