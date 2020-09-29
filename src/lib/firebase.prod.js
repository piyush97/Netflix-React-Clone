import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DB_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.M_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASURE_ID,
};

const firebase = Firebase.initializeApp(config);

export { firebase };
