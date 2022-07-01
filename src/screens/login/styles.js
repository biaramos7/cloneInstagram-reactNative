import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 30,
        flex: 1,
    },
    
    topWrapper: {
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 10,
        marginTop: 150
    },

    imageFacebook: {
        width: 40,
        height: 40,
        borderRadius: 30,
    },

    input: {
        padding: 20,
        marginHorizontal: 20,
        marginTop: 15,
        borderRadius: 7,
        fontSize: 18,
        borderWidth: 1.8,
        borderColor: '#aaa',
    },

    button: {
        alignItems: "center",
        padding: 13,
        marginHorizontal: 20,
        marginTop: 30,
        marginBottom: 20,
        borderRadius: 7,
        backgroundColor: '#3296d4',
        flexDirection: 'row',
    },

    buttonText: {
        fontSize: 20,
        color: 'white',
        marginHorizontal: '15'
    },

    logo: {
        width: 225,
        height: 63,
    },

    text: {
        textAlign: "center",
        marginVertical: 8,
        color: '#aaa',
        fontSize: 25
    },

    text2: {
        textAlign: "center",
        marginVertical: 15,
        fontSize: 16,
        color: '#aaa'
    },
})