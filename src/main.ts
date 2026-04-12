import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import App from './App.vue'
import "./index.css"

library.add(faLinkedin, faGithub, faYoutube)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')



