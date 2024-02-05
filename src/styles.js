import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#1f1f1f',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 20,
        color: "#fff",
    },

    button: {
        backgroundColor: "#ffe",
        width: "70%",
        borderRadius: 10,
        alignItems: 'center',
        padding: 10,
        borderBlockColor: "#000",
        position: "absolute",
        bottom: "10%"
    },

    button_text: {
        fontSize: 22,
        color: "#000000",
    },

    input_box: {
        backgroundColor: "#000000",
        textAlign: "center",
        color: "#fff",
        marginTop: 10,
        marginBottom: 50,
        padding: 10,
        fontSize: 20,
        width: "70%",
        borderRadius: 10,
    }
    
});