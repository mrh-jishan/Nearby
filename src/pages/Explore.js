import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { connect } from 'react-redux';
import CardItem from '../components/CardItem';
import { theme } from '../core/theme';
import { initExplore } from '../store/actions/exploreAction';

const Explore = ({ navigation, loadExplore, explore }) => {

  const callExplore = useCallback(() => {
    loadExplore()
  }, [loadExplore])

  useEffect(() => {
    callExplore();
  }, [callExplore])

  const [data, setData] = useState(
    {
      canSwipe: false,
      cardIndex: 0
    })

  const onSwiped = (index, direction) => {
    console.log('index: ', index);
    // if (data.cards.length == index + 1) {
    //   setData({ ...data, canSwipe: true })
    // }

    // const to = data.cards[index].id;
    // const from = auth().currentUser.uid;

    // if (direction == 'right') {
    //   sentMessage(to, from);
    // }

    // if (direction == 'top') {
    //   navigation.navigate('Message', { id: to });
    // }
  }


  const sentMessage = (to, from) => {

  }

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
        cards={explore}
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


const mapDispatchToProps = dispatch => ({
  loadExplore: () => dispatch(initExplore())
});

const mapStateToProps = ({ explore }) => ({
  explore: explore.explore
});

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
