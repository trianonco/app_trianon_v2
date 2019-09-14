
import Vue from 'vue';
import router from '../../routes/router';

import VueAnalytics from 'vue-analytics';
Vue.use(VueAnalytics, {
    id: 'UA-128950882-1',
    router,
});

