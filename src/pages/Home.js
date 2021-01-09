import Geolocation from '@react-native-community/geolocation';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Paragraph from '../components/Paragraph';

const webClientId = '215704965807-o654olrarrlo3s21unjt5jgutvm5p8na.apps.googleusercontent.com'

const Home = ({ navigation }) => {

    useEffect(() => {
        GoogleSignin.configure({
            scopes: [
                'https://www.googleapis.com/auth/contacts.readonly',
                'https://www.googleapis.com/auth/user.birthday.read',
                'https://www.googleapis.com/auth/user.gender.read',
                'https://www.googleapis.com/auth/user.phonenumbers.read'],
            webClientId: webClientId
        });
    }, [webClientId]);

    const [isSigninInProgress, setIsSigninInProgress] = useState(false);

    const signIn = async () => {

        try {
            await GoogleSignin.hasPlayServices();
            const { idToken } = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            const {user} = await auth().signInWithCredential(googleCredential);

            Geolocation.getCurrentPosition(({coords}) => {
                firestore()
                    .collection('users')
                    .doc(user.uid)
                    .update({ 
                        latitude: coords.latitude,
                        longitude: coords.longitude
                     })
                    .then(() => {
                        console.log('User updated!');
                    }).catch(err => {
                        console.log('error updating: ', err);
                    });
            }, error => {
                console.log('error geo location: ', error);
            });
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
            console.log('error: ', error);
        }
        // navigation.navigate('RegisterScreen');
    };

    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Logo />
            <Header>An alternative E-commerce</Header>
            <Paragraph>
                The easiest way to buy & sell your goods.
    </Paragraph>

            <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={signIn}
                disabled={isSigninInProgress} />
        </View>
    )
}


export default Home
