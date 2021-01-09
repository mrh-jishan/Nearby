import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../core/styles';

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