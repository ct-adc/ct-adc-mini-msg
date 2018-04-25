import Vue from 'vue';
import MiniMsg from 'main';
import App from './app';

Vue.use(MiniMsg);
new Vue({
    el: '#app',
    data: {
        text: 'hello world'
    },
    render: h => h(App)
});
