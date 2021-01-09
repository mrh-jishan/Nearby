const functions = require('firebase-functions');

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

exports.createUser = functions.auth.user().onCreate((user) => {
    return admin.firestore().collection('users').doc(user.uid)
        .set({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            email: user.email,
            disabled: user.disabled,
            emailVerified: user.emailVerified,
            phoneNumber: user.phoneNumber,
        }).then(res => {
            console.log('User created result:', res);
            return res;
        }).catch(err => {
            console.log('Error in creating: ', err);
            return err;
        });
});


exports.deleteUser = functions.auth.user().onDelete((user) => {
    return admin.firestore().collection('users').doc(user.uid).delete().then(res => {
        console.log('User deleted result:', res);
        return res;
    }).catch(err => {
        console.log('Error in deleting: ', err);
        return err;
    });
});