import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { theme } from '../core/theme';

const DIMENSION_WIDTH = Dimensions.get("window").width;

const Avatar = ({ image, lastMessage, name }) => {
    return (
        <View style={styles.containerMessage}>
            <Image source={image} style={styles.avatar} />
            <View style={styles.content}>
                <Text>{name}</Text>
                <Text style={styles.message}>{lastMessage}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerMessage: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
        paddingHorizontal: 10,
        width: DIMENSION_WIDTH - 100
    },
    avatar: {
        borderRadius: 30,
        width: 60,
        height: 60,
        marginRight: 20,
        marginVertical: 15
    },
    message: {
        color: theme.colors.gray,
        fontSize: 12,
        paddingTop: 5
    },
})
export default Avatar;