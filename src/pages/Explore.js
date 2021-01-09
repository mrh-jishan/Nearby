import React, { memo } from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Paragraph from '../components/Paragraph';

const Explore = ({ navigation }) => {
  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favourite code editor and start
        editing this project.
    </Paragraph>
    </Background>
  )
}

export default memo(Explore);
