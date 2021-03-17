import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Paragraph from '../components/Paragraph';
import { successLogin } from '../store/actions/authAction';
import { googleAuth } from '../store/api';

const Home = ({ navigation, coords, successUser }) => {

    const [isSigninInProgress, setIsSigninInProgress] = useState(false);

    const signIn = async () => {
        setIsSigninInProgress(true);
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            const { idToken } = await GoogleSignin.signIn();
            googleAuth({ token: idToken, coords })
                .then(res => {
                    const { token, user } = res.data;
                    successUser(token, user)
                }).catch(err => {
                    Alert.alert("Message", "Something wrong happen! Please try again...",
                        [
                            { text: "OK" }
                        ],
                        { cancelable: false }
                    );
                })
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
    coords: coords
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);


