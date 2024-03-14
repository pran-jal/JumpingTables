import { StyleSheet } from 'react-native'
import { getTheme } from '../../styles/theme'


function getStyles(theme_name) {
    var theme = getTheme(theme_name);
    return {

        container: {
            flex: 1,
            backgroundColor: theme.Container.backgroundColor,
        },

        title: {
            fontSize: 20,
            color: theme.Title.color,
            alignContent: "flex-start",
            alignItems: "flex-start",
            paddingTop: 10,
            paddingLeft: 10
        },        
        
        score: {
            fontSize: 20,
            color: theme.Title.color,
            alignContent: "flex-end",
            alignItems: "flex-end",
            paddingTop: 10,
            paddingLeft: 10
        },

        button: {
            backgroundColor: theme.Button.backgroundColor,
            width: "70%",
            borderRadius: 10,
            alignItems: 'center',
            padding: 10,
            borderBlockColor: theme.Button.borderBlockColor,
            position: "absolute",
            bottom: "5%",
            alignSelf: "center"
        },

        answer_button: {
            backgroundColor: theme.Button.backgroundColor,
            width: "70%",
            borderRadius: 10,
            alignItems: 'center',
            padding: 10,
            borderBlockColor: theme.Button.borderBlockColor,
            position: "absolute",
            bottom: "15%",
            alignSelf: "center"
        },

        option_container:  {
            margin: "5%",
            position: "relative",
        },

        flex_container: {
            flexDirection: "row",
        },

        option: {
            backgroundColor: theme.Button.backgroundColor,
            width: "50%",
            borderRadius: 10,
            alignItems: 'center',
            padding: 10,
            borderBlockColor: theme.Button.borderBlockColor,
            alignSelf: "center",
            margin: 7,
            flex: 2,
        },

        option_button_text: {
            fontSize: 22,
            color: theme.ButtonText.color
        },

        display_box: {
            alignSelf: "center",
            backgroundColor: theme.InputBox.backgroundColor,
            textAlign: "center",
            color: theme.InputBox.color,
            marginTop: 30,
            // marginBottom: 10,
            padding: 10,
            fontSize: 20,
            width: "70%",
            borderRadius: 10,
        }
    }
}

export const styles = StyleSheet.create(getStyles());