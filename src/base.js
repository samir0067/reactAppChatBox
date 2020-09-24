import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyBNuy_IR_BSZhO-y_REvgo6yk2ruIDkigw",
	authDomain: "chatboxtuto.firebaseapp.com",
	databaseURL: "https://chatboxtuto.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base