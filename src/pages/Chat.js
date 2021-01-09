import React, { memo } from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import Logo from '../components/Logo';

const Chat = ({ navigation }) => {
    return (
        <Background>
            <Logo />
            <Header>Let’s start</Header>
        </Background>
    )
}

export default memo(Chat);
