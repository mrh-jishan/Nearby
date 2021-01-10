import firestore from '@react-native-firebase/firestore';
import React, { useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react/cjs/react.development';
import styles from '../core/styles';
import { theme } from '../core/theme';

const CardItem = ({ user }) => {

    const [ref, setRef] = useState(null)

    useEffect(() => {
        if (user) {
            const { id } = user;
            firestore().collection('users').doc(id).get().then(res => {
                console.log('user response: ', res.data());
                setRef(res.data());
            })
        }
    }, [user])

    if (!ref) {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.colors.white,
            }}>
                <Text style={{
                     fontSize: 20,
                     fontWeight: "bold"
                }}>This is no more user to swipe</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {/* IMAGE */}
            <Image source={{ uri: ref.photoURL }} style={styles.imageStyle} />

            {/* MATCHES */}
            <View style={styles.matchesCard}>
                <Text style={styles.matchesText}>
                    <Icon name="heart" size={20} /> {user.distance} Mile away
                </Text>
            </View>

            {/* NAME */}
            <Text style={styles.userName}>{ref.displayName}</Text>

            {/* DESCRIPTION */}
            {/* <Text style={styles.description}>Description Of User</Text> */}

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

                <TouchableOpacity style={styles.miniButton} >
                    <Text style={styles.like}>
                        <Icon name="thumbs-up" size={30} />
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.miniButton}>
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

export default CardItem;