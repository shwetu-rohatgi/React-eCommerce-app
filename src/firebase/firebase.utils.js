import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBoAePwhR0YFrLJLA_iHMRVySyFd58N2bk",
    authDomain: "crwn-shopping-app-83208.firebaseapp.com",
    databaseURL: "https://crwn-shopping-app-83208.firebaseio.com",
    projectId: "crwn-shopping-app-83208",
    storageBucket: "crwn-shopping-app-83208.appspot.com",
    messagingSenderId: "826730583144",
    appId: "1:826730583144:web:4cd610803a81dafedbd7dd",
    measurementId: "G-3TS3SML2PR"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    //const userRef = firestore.doc('users/rjkHqBPnaE0EjD4uVJW6')
    const snapShot = await userRef.get();

    //console.log(snapShot);
    //console.log(firestore.doc('users/ababab123'))

    if(!snapShot.exists){
        const { displayName,email } = userAuth;
        const createdAt = new Date();
        try{
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch(e){
            console.log('Could not log user', e.message);
        }
    }
    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider); // Opens a popup window and returns a promise to handle errors.
export default firebase;
