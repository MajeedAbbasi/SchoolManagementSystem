import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDOvXn1E5gWfn5I3jEDRN7wUwqj4KIQ0mA",
  authDomain: "app-f4169.firebaseapp.com",
  projectId: "app-f4169",
  storageBucket: "app-f4169.appspot.com",
  messagingSenderId: "1034974057976",
  appId: "1:1034974057976:web:b685e2dacd53907d64b20d",
  databaseURL:
    "https://learning-management-syst-4875f-default-rtdb.firebaseio.com/",
};
export const app = initializeApp(firebaseConfig);
