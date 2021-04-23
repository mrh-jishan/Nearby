import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Paragraph from '../components/Paragraph';
import { successLogin } from '../store/actions/authAction';
import { GoogleAuth } from '../store/api/authService';

const Home = ({ navigation, coords, successUser }) => {

    const [isSigninInProgress, setIsSigninInProgress] = useState(false);

    const signIn = async () => {
        setIsSigninInProgress(true);
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            const { idToken } = await GoogleSignin.signIn();
            console.log('coords in signin: ', coords);
            GoogleAuth({ token: idToken, ...coords }).then(res => {
                console.log('res data: ', res);
                const { token, user } = res.data;
                successUser(user, token)
            }).catch(err => {
                console.log('err data:', err);
                Alert.alert("Message", "Something wrong happen! Please try again...",
                    [
                        { text: "OK" }
                    ],
                    { cancelable: false }
                );
            })
            // googleAuth({ token: idToken, ...coords }).then(res => {
            //     console.log('res: ', res);
            //     const { token, user } = res.data;
            //     successUser(user, token)
            // }).catch(err => {
            //     console.log('err: ', err);
            //     Alert.alert("Message", "Something wrong happen! Please try again...",
            //         [
            //             { text: "OK" }
            //         ],
            //         { cancelable: false }
            //     );
            // })
        } catch (error) {
            Alert.alert("Message", "Please allow google permission...",
                [
                    { text: "OK" }
                ],
                { cancelable: false }
            );
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
            <Paragraph>The easiest way to buy & sell your goods.</Paragraph>
            <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={signIn}
                disabled={isSigninInProgress} />
        </View>
    )
}


const mapDispatchToProps = dispatch => ({
    successUser: (user, token) => dispatch(successLogin(user, token))
});

const mapStateToProps = ({ coords }) => ({
    coords: coords.coords
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);


