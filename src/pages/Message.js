import firestore from '@react-native-firebase/firestore';
import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';


const data = [
    { id: 1, date: "9:50 am", type: 'in', message: "Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet" },
    { id: 2, date: "9:50 am", type: 'out', message: "Lorem ipsum dolor sit amet" },
    { id: 3, date: "9:50 am", type: 'in', message: "Lorem ipsum dolor sit a met" },
    { id: 4, date: "9:50 am", type: 'in', message: "Lorem ipsum dolor sit a met" },
    { id: 5, date: "9:50 am", type: 'out', message: "Lorem ipsum dolor sit a met" },
    { id: 6, date: "9:50 am", type: 'out', message: "Lorem ipsum dolor sit a met" },
    { id: 7, date: "9:50 am", type: 'in', message: "Lorem ipsum dolor sit a met" },
    { id: 8, date: "9:50 am", type: 'in', message: "Lorem ipsum dolor sit a met" },
    { id: 9, date: "9:50 am", type: 'in', message: "Lorem ipsum dolor sit a met" },
]

const renderDate = (date) => {
    return (
        <Text style={styles.time}>
            {date}
        </Text>
    );
}

const Message = ({ route, navigation }) => {

    const { id } = route.params;

    

    useEffect(() => {
        firestore().collection('users').doc(id).get().then(res => {
            console.log('user response message: ', res.data());
        })
    }, [id])

    return (
        <View style={styles.container}>
            <FlatList style={styles.list}
                data={data}
                initialScrollIndex={data.length - 1}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(message) => {
                    const item = message.item;
                    let inMessage = item.type === 'in';
                    let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
                    return (
                        <View style={[styles.item, itemStyle]}>
                            {!inMessage && renderDate(item.date)}
                            <View style={[styles.balloon]}>
                                <Text>{item.message}</Text>
                            </View>
                            {inMessage && renderDate(item.date)}
                        </View>
                    )
                }} />
            <View style={styles.footer}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Write a message..."
                        underlineColorAndroid='transparent'
                    />
                </View>

                <TouchableOpacity style={styles.btnSend}>
                    <Icon name='paper-plane' size={18} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        paddingHorizontal: 17,
    },
    footer: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#eeeeee',
        paddingHorizontal: 10,
        padding: 5,
    },
    btnSend: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginRight: 10,
    },
    inputs: {
        height: 40,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    balloon: {
        maxWidth: 250,
        padding: 15,
        borderRadius: 20,
    },
    itemIn: {
        alignSelf: 'flex-start'
    },
    itemOut: {
        alignSelf: 'flex-end',
        backgroundColor: '#FC9'
    },
    time: {
        alignSelf: 'center',
        margin: 8,
        fontSize: 12,
        color: "#808080",
    },
    item: {
        marginVertical: 5,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "#CCC",
        borderRadius: 10,
        padding: 0,
    },
});

export default Message;