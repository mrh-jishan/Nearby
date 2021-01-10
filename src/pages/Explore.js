import Geolocation from '@react-native-community/geolocation';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import functions from '@react-native-firebase/functions';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import CardItem from '../components/CardItem';
import { theme } from '../core/theme';

const Explore = ({ navigation }) => {
  const [data, setData] = useState(
    {
      cards: [],
      canSwipe: false,
      cardIndex: 0
    })

  const onSwiped = (index, direction) => {
    if (data.cards.length == index + 1) {
      setData({ ...data, canSwipe: true })
    }

    const to = data.cards[index].id;
    const from = auth().currentUser.uid;

    if (direction == 'right') {
      sentMessage(to, from);
    }

    if (direction == 'top') {
      navigation.navigate('Message', { id: to });
    }
  }


  const sentMessage = (to, from) => {
    firestore().collection('messages').add({
      from: from,
      to: to,
      message: `Hi there! Somebody want to know you more...`,
      timestamp: new Date().toLocaleString(),
      key: `${from}-${to}`
    })
  }

  useEffect(() => {
    Geolocation.getCurrentPosition(({ coords }) => {
      functions().httpsCallable('exploreUser')(coords).then(res => {
        setData({ ...data, cards: res.data })
        console.log('response function docs: ', res.data);
      }).catch(err => {
        console.log('error explore user: ', err);
      });
    })
  }, []);

  const visitProfile = () => {
    if (!data.canSwipe) {
      navigation.navigate('Profile');
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Swiper
        onSwipedLeft={(index) => onSwiped(index, 'left')}
        onSwipedRight={(index) => onSwiped(index, 'right')}
        onSwipedTop={(index) => onSwiped(index, 'top')}
        onSwipedBottom={visitProfile}
        onTapCard={visitProfile}
        cards={data.cards}
        cardIndex={data.cardIndex}
        cardVerticalMargin={8}
        cardHorizontalMargin={10}
        renderCard={(user) => <CardItem user={user} />}
        stackSize={2}
        stackSeparation={0}
        backgroundColor={theme.colors.gray}
        disableLeftSwipe={data.canSwipe}
        disableBottomSwipe={data.canSwipe}
        disableRightSwipe={data.canSwipe}
        disableTopSwipe={data.canSwipe} />
    </View>
  )
}

export default Explore;
