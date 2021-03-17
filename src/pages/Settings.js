import { GoogleSignin } from '@react-native-community/google-signin';
import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { connect } from 'react-redux';
import { logoutAction } from '../store/actions/authAction';
import ListItem from './../components/ListItem';

const data = [
    {
        title: 'Account',
        data: [
            {
                name: 'Profile',
                page: 'UserProfile',
                icon: 'user'
            },
            // {
            //     name: 'Edit Profile',
            //     page: 'EditProfile',
            //     icon: 'edit'
            // },
            // {
            //     name: 'eWallet',
            //     page: 'Wallet',
            //     icon: 'usd'
            // },
            // {
            //     name: 'Change Password',
            //     page: 'ChangePassword',
            //     icon: 'unlock'
            // },
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
            }
        ]
    },
]

const Settings = ({ navigation ,logoutAction}) => {

    const signout = async () => {
        logoutAction()
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
    }

    return (
        <View style={styles.container}>
            <SectionList
                sections={data}
                ItemSeparatorComponent={({ index }) => <View key={index} style={styles.separator} />}
                SectionSeparatorComponent={({ index }) => <View key={index} style={styles.separator} />}
                renderItem={({ item }) => <ListItem item={item}
                    onPress={() => navigation.navigate(item.page)} />}
                renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
                ListFooterComponent={() => {
                    return (
                        <View style={{ padding: 30 }}>
                            <Button
                                icon="logout"
                                mode="contained"
                                onPress={signout}>Logout</Button>
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



const mapDispatchToProps = dispatch => ({
    logoutAction: () => dispatch(logoutAction())
});

const mapStateToProps = ({ coords }) => ({
    coords: coords
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
