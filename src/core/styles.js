import { Dimensions, StyleSheet } from "react-native";
import { theme } from './theme';

const fullWidth = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        backgroundColor: theme.colors.white,
        borderRadius: 8,
        alignItems: "center", // for the card 
        margin: 0,
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowColor: theme.colors.black,
        height: fullHeight - 150,
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
    bg: {
        flex: 1,
        resizeMode: "cover",
        width: fullWidth,
        height: fullHeight
    },
    photo: {
        width: fullWidth,
        height: 450
    },
    containerProfileItem: {
        backgroundColor: theme.colors.white,
        paddingHorizontal: 10,
        paddingBottom: 25,
        margin: 20,
        borderRadius: 8,
        marginTop: -65,
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowColor: theme.colors.black,
        shadowOffset: { height: 0, width: 0 }
    },
    matchesProfileItem: {
		width: 131,
		marginTop: -15,
		backgroundColor: theme.colors.primary,
		paddingVertical: 7,
		paddingHorizontal: 20,
		borderRadius: 20,
		textAlign: "center",
		alignSelf: "center"
	},
	matchesTextProfileItem: {
		color: theme.colors.white
	},
	name: {
		paddingTop: 25,
		paddingBottom: 5,
		color: theme.colors.dark_gray,
		fontSize: 15,
		textAlign: "center"
	},
	descriptionProfileItem: {
		color: theme.colors.gray,
		textAlign: "center",
		paddingBottom: 20,
		fontSize: 13
	},
	info: {
		paddingVertical: 8,
		flexDirection: "row",
		alignItems: "center"
	},
	iconProfile: {
		fontSize: 12,
		color: theme.colors.dark_gray,
		paddingHorizontal: 10
	},
	infoContent: {
		color: theme.colors.gray,
		fontSize: 13
	},
});