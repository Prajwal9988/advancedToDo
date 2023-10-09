import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged, User, UserCredential } from "firebase/auth"

// Firebase key and API key
const firebaseConfig = {
  apiKey: "AIzaSyB93YaU4mCvi_pzsTnuLG78wt6d6m7G8R8",
  authDomain: "calender-api-integration-4f288.firebaseapp.com",
  projectId: "calender-api-integration-4f288",
  appId: "1:190108506851:web:a458a3e10065c724b4c3d6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/calendar");
provider.addScope("https://www.googleapis.com/auth/calendar.readonly");


// Initialising Auth instance
const auth = getAuth();

// Sign-in functionality
export function signInWithGoogle(){
   signInWithPopup(auth, provider).then((creds) => {
     console.log(creds,"Credentials");
     callCalender(creds);
     return creds as UserCredential;
   }).catch(err => {
    alert(err);
   })
}

// Adding a listener to the changes in the signed in and sign out state
export function onAuthStateChangedHelper(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
}


export async function signOutFunctionality(){
    return await auth.signOut();
}


async function callCalender(UserCredential : UserCredential){

    try {    
        const event = {
        'start': {
          'dateTime': '2023-10-07T19:02:49.609Z',
          'timeZone': 'America/Los_Angeles'
        },
        'end': {
          'dateTime': '2023-10-08T19:02:49.609Z',
          'timeZone': 'America/Los_Angeles'
        }
      };
        const resp = await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events",{
            headers : {
                "Authorization" : `Bearer ${UserCredential._tokenResponse.oauthAccessToken}`,
                "Accept" : "application/json"
            },
            method: "post",
            body : JSON.stringify(event)
        })
    } catch (error) {
        console.log(error);
        
    }
    
}

