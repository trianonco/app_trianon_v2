
import Vue from 'vue';
import PouchDB from 'pouchdb';

const LOCAL_DATABASE_NAME = 'TOK_PETS_PWA';
const indDB = new PouchDB(LOCAL_DATABASE_NAME);
(window as any).indDB = indDB;
