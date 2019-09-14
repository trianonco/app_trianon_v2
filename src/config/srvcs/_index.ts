import Vue from 'vue';
import DBGeolocationsService from '../../database/db.geolocations/_index';
import DBPetsService from '../../database/db.pets/_index';
import DBUsersService from '../../database/db.users/_index';
import DBShopService from '../../database/db.shop/_index';

Vue.prototype.$db = {};
Vue.prototype.$db.geolocations = new DBGeolocationsService();
Vue.prototype.$db.pets = new DBPetsService();
Vue.prototype.$db.users = new DBUsersService();
Vue.prototype.$db.shop = new DBShopService();
