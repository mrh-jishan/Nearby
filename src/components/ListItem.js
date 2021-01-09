import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const ListItem = ({ item, ...props }) => {
    return (
        <TouchableOpacity style={styles.listItem} {...props}>
            <View style={styles.listItemLeft}>
                <Icon name={item.icon} size={20} />
                <Text style={styles.item}>{item.name}</Text>
            </View>
            <Icon name='arrow-circle-right' size={20} style={styles.itemIcon} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItemLeft: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 10,
    },
    listItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color: '#5636B8',
    },
    itemIcon: {
        marginRight: 13,
        color: '#808899',
    },
});




export default ListItem;