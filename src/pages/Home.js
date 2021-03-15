import { GoogleSigninButton } from '@react-native-community/google-signin';
import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Paragraph from '../components/Paragraph';
import { POST } from './../api';
import { CoordsContext } from './../CoordsProvider';

const Home = ({ navigation }) => {

    const coords = useContext(CoordsContext);

    const [isSigninInProgress, setIsSigninInProgress] = useState(false);

    const signIn = async () => {
        POST('/sessions',
            { password: "password", email: "rrobinhassan@gmall.com", provider: "Basic", })
            .then(res => {
                console.log('res basic: ', res);
            }).catch(err => {
                console.log('err basic: ', err);
            })
        // setIsSigninInProgress(true);
        // try {
        //     await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        //     const { idToken } = await GoogleSignin.signIn();
        //     console.log('idToken: ', idToken);
        // } catch (error) {
        //     console.log('error signin: ', error);
        // }
        // setIsSigninInProgress(false);
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


export default Home
