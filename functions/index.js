const functions = require('firebase-functions');

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');

const geofirestore = require('geofirestore');

admin.initializeApp();

const firestore = admin.firestore();

const GeoFirestore = geofirestore.initializeApp(firestore);

const geocollection = GeoFirestore.collection('users');

exports.createUser = functions.https.onCall((data, context) => {

    const { user, coords } = data;

    return geocollection.doc(user.uid).set({
        ...user,
        coordinates: new admin.firestore.GeoPoint(coords.latitude, coords.longitude),
    }).then(res => {
        return res;
    }).catch(err => {
        throw new functions.https.HttpsError('failed-precondition', 'Ops! Please try again..', err);
    })
});

exports.exploreUser = functions.https.onCall((data, context) => {

    const { latitude, longitude } = data;

    // Create a GeoQuery based on a location
    const query = geocollection.near({
        center: new admin.firestore.GeoPoint(latitude, longitude),
        radius: 1000
    });

    return query.get().then((value) => {
        return value.docs;
    }).catch(err => {
        throw new functions.https.HttpsError('failed-precondition', 'Ops! Please try again..', err);
    });
});