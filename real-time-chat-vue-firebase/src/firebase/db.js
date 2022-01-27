import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import config from './config'

const db = firebase.initializeApp(config)

export default db
