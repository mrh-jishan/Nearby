import Geolocation from '@react-native-community/geolocation';
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
      swipedAllCards: false,
      cardIndex: 0
    })

  const onSwiped = (index) => {
    console.log(`on swiped ${index}`)
    console.log('t: ', data.cards[index]);
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

  return (
    <View style={{ flex: 1 }}>
      <Swiper
        onSwipedLeft={(index) => onSwiped(index)}
        onSwipedRight={(index) => onSwiped(index)}
        onSwipedTop={(index) => onSwiped(index)}
        onSwipedBottom={(index) => onSwiped(index)}
        onTapCard={() => navigation.navigate(index)}
        cards={data.cards}
        cardIndex={data.cardIndex}
        cardVerticalMargin={8}
        cardHorizontalMargin={10}
        renderCard={(user) => <CardItem user={user} />}
        stackSize={2}
        stackSeparation={0}
        backgroundColor={theme.colors.gray}/>
    </View>
  )
}

export default Explore;
