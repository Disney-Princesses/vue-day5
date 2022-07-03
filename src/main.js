import Vue from 'vue'
import App from './App.vue'

// 引入css
import "./assets/styles/base.css"
import  "./assets/styles/index.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
