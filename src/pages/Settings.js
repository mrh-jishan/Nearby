import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import ListItem from './../components/ListItem';


const data = [
    {
        title: 'Account',
        data: [
            {
                name: 'Profile',
                page: 'MyProfile',
                icon: 'user'
            },
            {
                name: 'Edit Profile',
                page: 'EditProfile',
                icon: 'edit'
            },
            {
                name: 'eWallet',
                page: 'Wallet',
                icon: 'usd'
            },
            {
                name: 'Change Password',
                page: 'ChangePassword',
                icon: 'unlock'
            },
            {
                name: 'Delete my account',
                page: 'DeleteAccount',
                icon: 'trash'
            },
        ]
    },
    {
        title: 'Help',
        data: [
            {
                name: 'Privacy Policy',
                page: 'PrivacyPolicy',
                icon: 'user-secret'
            },
            {
                name: 'FAQ',
                page: 'Faq',
                icon: 'question-circle'
            },
            {
                name: 'Contact Us',
                page: 'ContactUs',
                icon: 'id-card'
            },
            {
                name: 'App info',
                page: 'AppInfo',
                icon: 'info'
            }]
    },
]

const Settings = () => {
    return (
        <View style={styles.container}>
                <SectionList
                    sections={data}
                    ItemSeparatorComponent={({ index }) => <View key={index} style={styles.separator} />}
                    SectionSeparatorComponent={({ index }) => <View key={index} style={styles.separator} />}
                    renderItem={({ item }) => <ListItem item={item}
                        onPress={() => this.props.navigation.navigate(item.page)} />}
                    renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                    ListFooterComponent={() => {
                        return (
                            <View style={{ padding: 30 }}>
                                <Button icon="logout" mode="contained">Logout</Button>
                            </View>
                        )
                    }}
                />
            </View>
    );
}


const styles = StyleSheet.create({
    separator: {
        height: 0.8,
        width: "100%",
        backgroundColor: "#c9c9c9"
    },
    container: {
        flex: 1,
    },
    sectionHeader: {
        paddingTop: 15,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 15,
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: '#F7F8F8',
    },
});



export default Settings;