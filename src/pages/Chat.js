import React from 'react';
import { Dimensions, FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Avatar from '../components/Avatar';
import { theme } from '../core/theme.js';

const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;

const data = [
    {
        id: 1,
        name: 'Leanne Graham',
        status: 'Online',
        match: '78',
        description:
            'Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.',
        message:
            'I will go back to Gotham and I will fight men Iike this but I will not become an executioner.',
        image: require('../assets/logo.png')
    },
    {
        id: 2,
        name: 'Clementine Bauch',
        match: '93',
        description:
            'Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.',
        status: 'Offline',
        message: "Someone like you. Someone who'll rattle the cages.",
        image: require('../assets/logo.png')
    },
    
]

const Chat = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../assets/background_dot.png')}
            style={styles.bg}
        >
            <View style={styles.containerMessages}>
                <FlatList
                    data={data}
                    ListHeaderComponent={() => (<View style={styles.top}>
                        <Text style={styles.title}>Messages</Text>
                    </View>)}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={()=> navigation.navigate('Message')}>
                            <Avatar
                                image={item.image}
                                name={item.name}
                                lastMessage={item.message}
                            />
                        </TouchableOpacity>
                    )}
                />
            </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    containerMessages: {
        justifyContent: "space-between",
        flex: 1,
        paddingHorizontal: 10
    },
    bg: {
        flex: 1,
        resizeMode: "cover",
        width: DIMENSION_WIDTH,
        height: DIMENSION_HEIGHT
    },
    top: {
        paddingTop: 50,
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        paddingBottom: 10,
        fontSize: 22,
        color: theme.colors.dark_gray
    },
    icon: {
        fontSize: 20,
        color: theme.colors.dark_gray,
        paddingRight: 10
    },
})

export default Chat;
