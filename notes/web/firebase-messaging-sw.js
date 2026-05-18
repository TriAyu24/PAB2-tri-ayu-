importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

// Gunakan konfigurasi web dari firebase_options.dart Anda
firebase.initializeApp({
  apiKey: "AIzaSyBVjSlcsBtgvDCZoVoZvOyamxRVL_SN53c",
  authDomain: "notes-2ea4e.firebaseapp.com",
  projectId: "notes-2ea4e",
  storageBucket: "notes-2ea4e.firebasestorage.app",
  messagingSenderId: "1033382730877",
  appId: "1:1033382730877:web:757f1b050a0f76b13ae514",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/favicon.png",
  };
  return self.registration.showNotification(notificationTitle, notificationOptions);
});
