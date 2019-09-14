
// ---------------------------------------------------------------------------- //
// -- Service Worker ImportScripts -------------------------------------------- //
// ---------------------------------------------------------------------------- //
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
// ---------------------------------------------------------------------------- //




// ---------------------------------------------------------------------------- //
// -- Init Settings  ---------------------------------------------------------- //
// ---------------------------------------------------------------------------- //
firebase.initializeApp({ 'messagingSenderId': '1034299822340' });
const messaging = firebase.messaging();
// ---------------------------------------------------------------------------- //




// ---------------------------------------------------------------------------- //
// -- Service Worker Workbox & Cache handled ---------------------------------- //
// ---------------------------------------------------------------------------- //
workbox.core.setCacheNameDetails({ prefix: "app-tokpets-v2" });
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
// ---------------------------------------------------------------------------- //





// ---------------------------------------------------------------------------- //
// -- Firebase Cloud Messaging ------------------------------------------------ //
// ---------------------------------------------------------------------------- //

/*
const messagingPublicKey = 'BLqXfDySoK_0PkM33_Dv4-gaLHw248P4eVrDq_BSb24GGHVkOGn1rFKNGGucRqgvkSSz3dWKMLBS47r37lDp5hY';
messaging.usePublicVapidKey(messagingPublicKey);
Notification.requestPermission().then(function (permission) {
    messaging.getToken().then((token) => {
        // tslint:disable-next-line: no-console
        console.log('FCM From SW :: token');
        console.log(token);
    });
}).catch((err) => {
    console.log('Unable to get permission to notify.', err);
});
*/
messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    var notificationTitle = 'Background Message Title';
    var notificationOptions = {
        body: 'Background Message body.',
        icon: '/favicon.ico'
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});

// ---------------------------------------------------------------------------- //





// ---------------------------------------------------------------------------- //
// -- Service Worker Events --------------------------------------------------- //
// ---------------------------------------------------------------------------- //
self.addEventListener('message', function (event) {
    console.log("SW Received Message: ");
    console.log(event.data);
});

self.addEventListener('push', function (event) {
    console.log("SW Received PUSH: ");
    console.log(event.data.text());
});

self.addEventListener('sync', function (event) {
    if (event.tag == 'myFirstSync') {
        event.waitUntil(() => { console.warn(' SW Received Sync MyFirstSync') });
    }
});
// ---------------------------------------------------------------------------- //
