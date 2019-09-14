import Vue from 'vue';
import Vuex from 'vuex';

import mapsModule from './MapsStore/index.store';
import petsModule from './PetsStore/index.store';
import shopModule from './ShopStore/index.store';
import statsModule from './StatsStore/index.store';
import usersModule from './UsersStore/index.store';
import chatModule from './ChatStore/index.store';
import settingsModule from './SettingsStore/index.store';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    chat: chatModule,
    shop: shopModule,
    stats: statsModule,
    users: usersModule,
    settings: settingsModule,
  },
});
