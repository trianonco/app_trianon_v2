
import * as firebase from 'firebase/app';
const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });
(window as any).firestore = firestore;
