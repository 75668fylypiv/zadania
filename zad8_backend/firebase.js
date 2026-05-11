import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {

    apiKey: "AIzaSyB0hIYwZdVGg3bMR-kVQqMIRqh_KVYLDzo",
    authDomain: "project-2303144963337504221.firebaseapp.com",
    projectId: "project-2303144963337504221",
    storageBucket: "project-2303144963337504221.firebasestorage.app",
    messagingSenderId: "718201392644",
    appId: "1:718201392644:web:de015897bfd283d077ef51"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
document.getElementById("contactForm").addEventListener("submit", async function(e) {

    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    try {

        await addDoc(collection(db, "messages"), {

            name,
            surname,
            email,
            message,
            createdAt: new Date()

        });

        alert("Dane zostały zapisane!");

        document.getElementById("contactForm").reset();

    } catch(error) {

        console.error(error);
        alert("Błąd połączenia z Firebase");

    }
});