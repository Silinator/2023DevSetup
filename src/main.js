import { createApp } from 'vue';
import { createPinia } from 'pinia';

import { Quasar } from 'quasar';
import 'quasar/dist/quasar.css';
import App from './App.vue';
import './style.css';

const myApp = createApp(App);
const pinia = createPinia();

myApp.use(pinia);

myApp.use(Quasar, {
	plugins: {}, // import Quasar plugins and add here
	/*
	config: {
	  brand: {
		// primary: '#e46262',
		// ... or all other brand colors
	  },
	  notify: {...}, // default set of options for Notify Quasar plugin
	  loading: {...}, // default set of options for Loading Quasar plugin
	  loadingBar: { ... }, // settings for LoadingBar Quasar plugin
	  // ..and many more (check Installation card on each Quasar component/directive/plugin)
	}
	*/
});

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app');
