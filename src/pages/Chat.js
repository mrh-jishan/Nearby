import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-paper';
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


    const [users, setUsers] = useState([])

    useEffect(() => {
        setUsers(data)
    }, [])

    return (
        <ImageBackground
            source={require('../assets/background_dot.png')}
            style={styles.bg}
        >
            <View style={styles.containerMessages}>
                <FlatList
                    data={users}
                    ListHeaderComponent={() => (
                        <View style={styles.top}>
                            <View>
                                <Text style={styles.title}>Messages</Text>
                            </View>
                            <View style={styles.separator} />
                        </View>
                    )}
                    ItemSeparatorComponent={({ index }) => <View key={index} style={styles.separator} />}
                    SectionSeparatorComponent={({ index }) => <View key={index} style={styles.separator} />}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Message', { id: item.to })}>
                            <View style={styles.messageContainer}>
                                <Avatar.Text size={40} style={styles.avatar} label="XD" />
                                <Text>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    messageContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
        paddingHorizontal: 10,
        width: DIMENSION_WIDTH - 100
    },
    avatar: {
        borderRadius: 30,
        marginRight: 20,
        marginVertical: 15
    },
    message: {
        color: theme.colors.gray,
        fontSize: 12,
        paddingTop: 5
    },
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
        paddingTop: 10,
        marginHorizontal: 10,
        flexDirection: "column",
        alignItems: "flex-start",
    },
    title: {
        paddingBottom: 10,
        fontSize: 22,
        color: theme.colors.dark_gray,

    },
    icon: {
        fontSize: 20,
        color: theme.colors.dark_gray,
        paddingRight: 10
    },
    separator: {
        height: 0.8,
        width: "100%",
        backgroundColor: "#c9c9c9"
    },
})

export default Chat;
