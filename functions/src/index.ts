
import * as tanam from 'tanam';

tanam.initializeApp({
    users: {
        "dennis@oddbit.id": "owner",
        "dennis@kumpul.id": "owner",
        "faye@kumpul.id": "owner",
        "deta@oddbit.id": "admin",
    },
    firebaseApp: {
        apiKey: "AIzaSyDklPr1AZMlUNnZF_JBiklHYRf4ZT1us8A",
        authDomain: "ruangtempo-dev.firebaseapp.com",
        databaseURL: "https://ruangtempo-dev.firebaseio.com",
        projectId: "ruangtempo-dev",
        storageBucket: "ruangtempo-dev.appspot.com",
        messagingSenderId: "681682867439"
    },
});

export * from 'tanam';
