import functions from '@react-native-firebase/functions';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import CardItem from '../components/CardItem';
import { CoordsContext } from '../CoordsProvider';
import { theme } from '../core/theme';


const Explore = ({ navigation }) => {

  const coords = useContext(CoordsContext);

  const [data, setData] = useState({
    cards: [1, 2, 3, 4, 5, 6, 7, 8],
    swipedAllCards: false,
    swipeDirection: '',
    cardIndex: 0
  }
  )
  let swiper = useRef(null);

  const onSwiped = (type) => {
    console.log(`on swiped ${type}`)
  }

  const onSwipedAllCards = () => {
    setData({ ...data, swipedAllCards: true })
  };

  const swipeLeft = () => {
    swiper.swipeLeft()
  };

  useEffect(() => {
    functions()
      .httpsCallable('exploreUser')(coords)
      .then(res => {
        console.log('response function docs: ', res.data);
      }).catch(err => {
        console.log('error explore user: ', err);
      });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Swiper
        ref={sw => {
          swiper = sw
        }}
        onSwiped={() => onSwiped('general')}
        onSwipedLeft={() => onSwiped('left')}
        onSwipedRight={() => onSwiped('right')}
        onSwipedTop={() => onSwiped('top')}
        onSwipedBottom={() => onSwiped('bottom')}
        onTapCard={() => navigation.navigate('Profile')}
        cards={data.cards}
        cardIndex={data.cardIndex}
        cardVerticalMargin={8}
        cardHorizontalMargin={10}
        renderCard={CardItem}
        onSwipedAll={onSwipedAllCards}
        stackSize={5}
        stackSeparation={0}
        swipeBackCard
        backgroundColor={theme.colors.gray}
      >
        {/* <Button onPress={() => swiper.swipeBack()} title='Swipe Back' /> */}
      </Swiper>
    </View>
  )
}

export default Explore;
