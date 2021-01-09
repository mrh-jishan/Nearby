import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from '../core/theme';

const fullWidth = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height;

const CardItem = () => {
    return (
        <View style={styles.container}>
            {/* IMAGE */}
            <Image source={require('../assets/logo.png')} style={styles.imageStyle} />

            {/* MATCHES */}
            <View style={styles.matchesCard}>
                <Text style={styles.matchesText}>
                    <Icon name="heart" size={20} /> 20% Match!
                </Text>
            </View>

            {/* NAME */}
            <Text style={styles.userName}>Name Of User</Text>

            {/* DESCRIPTION */}
            <Text style={styles.description}>Description Of User</Text>

            {/* STATUS */}
            <View style={styles.status}>
                {/* <View style={status === 'Online' ? styles.online : styles.offline} /> */}
                <View style={styles.online} />
                <Text style={styles.statusText}>Online</Text>
            </View>

            {/* ACTIONS */}
            <View style={styles.cardAction}>

                <TouchableOpacity style={styles.miniButton}>
                    <Text style={styles.star}>
                        <Icon name="star" size={30} />
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.miniButton} onPress={() => onPressLeft()}>
                    <Text style={styles.like}>
                        <Icon name="thumbs-up" size={30} />
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.miniButton} onPress={() => onPressRight()} >
                    <Text style={styles.dislike}>
                        <Icon name="thumbs-down" size={30} />
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.miniButton}>
                    <Text style={styles.flash}>
                        <Icon name="flash" size={30} />
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.white,
        borderRadius: 8,
        alignItems: "center", // for the card 
        margin: 0,
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowColor: theme.colors.black,
        height: fullHeight - 95,
        shadowOffset: { height: 0, width: 0 }
    },
    imageStyle: {
        borderRadius: 8,
        width: fullWidth - 80,
        height: 350,
        margin: 20
    },
    userName: {
        paddingTop: 15,
        paddingBottom: 7,
        color: '#363636',
        fontSize: 30
    },
    online: {
        width: 6,
        height: 6,
        backgroundColor: theme.colors.online_status,
        borderRadius: 3,
        marginRight: 4
    },
    offline: {
        width: 6,
        height: 6,
        backgroundColor: theme.colors.offline_status,
        borderRadius: 3,
        marginRight: 4
    },
    status: {
        paddingBottom: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    statusText: {
        color: theme.colors.gray,
        fontSize: 12
    },
    description: {
        color: theme.colors.dark_gray,
        textAlign: "center"
    },
    miniButton: {
        width: 40,
		height: 40,
		borderRadius: 30,
		backgroundColor: theme.colors.white,
		marginHorizontal: 7,
		alignItems: "center",
		justifyContent: "center",
		shadowOpacity: 0.15,
		shadowRadius: 20,
		shadowColor: theme.colors.dark_gray,
		shadowOffset: { height: 10, width: 0 }
    },
    matchesText: {
        color: theme.colors.white
    },
    matchesCard: {
        marginTop: 0,
        backgroundColor: theme.colors.primary,
        paddingVertical: 7,
        paddingHorizontal: 15,
        borderRadius: 20
    },

    cardAction: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 30,
        justifyContent: "space-between",
    },
    statusText: {
        color: theme.colors.gray,
        fontSize: 12
    },
    star: {
        color: theme.colors.star_action
    },
    like: {
        fontSize: 25,
        color: theme.colors.like_action
    },
    dislike: {
        fontSize: 25,
        color: theme.colors.dislike_action
    },
    flash: {
        color: theme.colors.flash_action
    },
});

export default CardItem;