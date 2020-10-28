import * as firebase from 'firebase'

const firebaseConfig = {
	apiKey: "AIzaSyAtdSCXHnvlH_ReBdP9FPhzMrFq4SwPZVw",
    authDomain: "tempus-5b4e4.firebaseapp.com",
    databaseURL: "https://tempus-5b4e4.firebaseio.com",
    projectId: "tempus-5b4e4",
    storageBucket: "tempus-5b4e4.appspot.com",
    messagingSenderId: "431745756394",
    appId: "1:431745756394:web:35ca916a6c5437c1327b93"
}

firebase.initializeApp(firebaseConfig)

export default firebase