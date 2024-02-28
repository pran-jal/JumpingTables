import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#1f1f1f',
    },

    title: {
        fontSize: 20,
        color: "#fff",
        alignContent: "flex-start",
        alignItems: "flex-start",
        paddingTop: 10,
        paddingLeft: 10
    },

    button: {
        backgroundColor: "#ffe",
        width: "70%",
        borderRadius: 10,
        alignItems: 'center',
        padding: 10,
        borderBlockColor: "#000",
        position: "absolute",
        bottom: "5%",
        alignSelf: "center"
    },

    answer_button: {
        backgroundColor: "#ffe",
        width: "70%",
        borderRadius: 10,
        alignItems: 'center',
        padding: 10,
        borderBlockColor: "#000",
        position: "absolute",
        bottom: "15%",
        alignSelf: "center"
    },

    option_container:  {
        margin: "20%",
        position: "relative"
    },

    option: {
        backgroundColor: "#ffe",
        width: "100%",
        borderRadius: 10,
        alignItems: 'center',
        padding: 10,
        borderBlockColor: "#000",
        alignSelf: "center",
        margin: 10
    },

    option_button_text: {
        fontSize: 22,
        color: "#000000"
    },

    input_box: {
        alignSelf: "center",
        backgroundColor: "#000000",
        textAlign: "center",
        color: "#fff",
        marginTop: 30,
        // marginBottom: 10,
        padding: 10,
        fontSize: 20,
        width: "70%",
        borderRadius: 10,
    }
    
});