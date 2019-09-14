

import * as firebase from 'firebase/app';

const messaging = firebase.messaging();
const messagingPublicKey = 'BLqXfDySoK_0PkM33_Dv4-gaLHw248P4eVrDq_BSb24GGHVkOGn1rFKNGGucRqgvkSSz3dWKMLBS47r37lDp5hY';
messaging.usePublicVapidKey(messagingPublicKey);
(window as any).messaging = messaging;
