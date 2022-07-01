import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    postHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 40,
        alignItems: 'center',
        marginBottom: 10,
    },
    userInfo: {
        flexDirection: 'row',
        marginRight: 10
    },
    userPicture: {
        width: 40,
        height: 40,
        borderRadius: 40
    },
    author: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold'
    },
    place: {
        fontSize: 12,
        color: '#666'
    },
    picture: {
        width: '100%',
        height: 500
    },
    footer: {
        paddingHorizontal: 10,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
    leftActions: {
        flexDirection: 'row'
    },
    action: {
        marginRight: 12
    },
    likes: {
        fontWeight: 'bold',
        fontSize: 13
    },
    description: {
        color: '#000',
        lineHeight: 18,
    },
    hashtag: {
        fontSize: 13,
        color: '#002d5e'
    },
});

export default styles;