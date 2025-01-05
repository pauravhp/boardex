import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDaGDenOaIzaRpQq5rGHhNpgOFdIOjmTec",
	authDomain: "boardex-d3aca.firebaseapp.com",
	projectId: "boardex-d3aca",
	storageBucket: "boardex-d3aca.firebasestorage.app",
	messagingSenderId: "642730489776",
	appId: "1:642730489776:web:8628b1df213a9440794875",
	measurementId: "G-FBLP4WRG37",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const boardgameListRef = collection(firebaseDB, "boardgameList");
