const functions = require('firebase-functions');

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');

const geofirestore = require('geofirestore');

admin.initializeApp();

const firestore = admin.firestore();

const GeoFirestore = geofirestore.initializeApp(firestore);

const geocollection = GeoFirestore.collection('users');

exports.createUser = functions.https.onCall(async (data, context) => {

    const { user, coords } = data;

    return await geocollection.doc(user.uid).set({
        ...user,
        coordinates: new admin.firestore.GeoPoint(coords.latitude, coords.longitude),
    })
});

exports.exploreUser = functions.https.onCall(async (data, context) => {

    const { latitude, longitude } = data;

    // Create a GeoQuery based on a location
    const query = geocollection.near({
        center: new admin.firestore.GeoPoint(latitude, longitude),
        radius: 1000
    });

    return await query.get().then((value) => {
        return value.docs;
    })
});



// ------------ Friends ----------------------

exports.addFriend = functions.https.onCall(async (data, context) => {

    const from = await firestore.collection('users').doc(data.from).get()
    const to = await firestore.collection('users').doc(data.to).get()

    const fromData = from.data();
    const toData = to.data();

    await firestore.collection('users').doc(data.from).update({
        friends: admin.firestore.FieldValue.arrayUnion({
            displayName: toData.displayName,
            photoURL: toData.photoURL,
            uid: toData.uid,

        })
    })

    await firestore.collection('users').doc(data.to).update({
        friends: admin.firestore.FieldValue.arrayUnion({
            displayName: fromData.displayName,
            photoURL: fromData.photoURL,
            uid: fromData.uid,
        })
    })
    return { from: fromData, to: toData }
})


// ------------ Messages ----------------------

exports.sendMessage = functions.https.onCall(async (data, context) => {
    const { from, to, message } = data;
    await firestore.collection('messages').add({
        from: from,
        to: to,
        message: message,
        timestamp: admin.firestore.Timestamp.fromDate(new Date()),
        key: `${from}-${to}`
    })

    return { message: 'done!' };
})


exports.messageList = functions.https.onCall(async (data, context) => {
    const { to, from } = data;
    const key1 = `${to}-${from}`;
    const key2 = `${from}-${to}`;
    const messages1 = await firestore.collection('messages').where('key', '==', key1).get();
    const messages2 = await firestore.collection('messages').where('key', '==', key2).get();

    const messages = [];

    messages1.forEach(doc => {
        messages.push({ uid: doc.id, ...doc.data() })
    });

    messages2.forEach(doc => {
        messages.push({ uid: doc.id, ...doc.data() })
    });
    return messages;
})