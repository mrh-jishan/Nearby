import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './../core/styles';

const data = {
    id: 1,
    name: 'Leanne Graham',
    status: 'Online',
    age: '20',
    location: 'dhaka',
    match: '78',
    description:
        'Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.',
    message:
        'I will go back to Gotham and I will fight men Iike this but I will not become an executioner.',
    image: require('../assets/logo.png')
}

const Profile = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../assets/background_dot.png')}
            style={styles.bg} >

            <ScrollView>
                <ImageBackground source={data.image} style={styles.photo}>
                </ImageBackground>

                <View style={styles.containerProfileItem}>

                    {data.me ?
                        <View style={styles.matchesProfileItem}>
                            <Text style={styles.matchesTextProfileItem}>
                                <Icon name="heart" /> {data.matches}% Match!
                        </Text>
                        </View>
                        :
                        <TouchableOpacity style={styles.matchesProfileItem}
                            onPress={() => { navigation.navigate('EditProfile') }}>
                            <Text style={styles.matchesTextProfileItem}>
                                <Icon name="edit" /> Edit  Profile
                        </Text>
                        </TouchableOpacity>
                    }

                    <Text style={styles.name}>{data.name} {data.name}</Text>
                    <Text style={styles.descriptionProfileItem}>
                        {data.age} - {data.location}
                    </Text>

                    <View style={styles.info}>
                        <Text style={styles.iconProfile}>
                            <Icon name="user" />
                        </Text>
                        <Text style={styles.infoContent}>{data.description}</Text>
                    </View>

                    <View style={styles.info}>
                        <Text style={styles.iconProfile}>
                            <Icon name="circle" />
                        </Text>
                        <Text style={styles.infoContent}>{data.description}</Text>
                    </View>

                    <View style={styles.info}>
                        <Text style={styles.iconProfile}>
                            <Icon name="hashtag" />
                        </Text>
                        <Text style={styles.infoContent}>{data.description}</Text>
                    </View>

                    <View style={styles.info}>
                        <Text style={styles.iconProfile}>
                            <Icon name="calendar" />
                        </Text>
                        <Text style={styles.infoContent}>{data.description}</Text>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

export default Profile;