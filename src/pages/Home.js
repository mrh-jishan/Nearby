import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Paragraph from '../components/Paragraph';
import { CoordsContext } from './../CoordsProvider';

const Home = ({ navigation }) => {

    const coords = useContext(CoordsContext);

    const [isSigninInProgress, setIsSigninInProgress] = useState(false);

    const signIn = async () => {
        setIsSigninInProgress(true);
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            const { idToken } = await GoogleSignin.signIn();
            // Create a Google credential with the token
            // const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            // const { user } = await auth().signInWithCredential(googleCredential);
            const body = {
                coords: coords,
                user: {
                    uid: user.uid,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    phoneNumber: user.phoneNumber,
                },
            }
            // functions().httpsCallable('createUser')(body).then(res => {
            //     console.log('res create user: ', res);
            // }).catch(err => {
            //     console.log('error create user: ', err);
            // })

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
            console.log('error signin: ', error);
        }
        setIsSigninInProgress(false);
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
