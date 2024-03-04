import { StyleSheet } from 'react-native'
import { getTheme } from "../../styles/theme"


function getStyles(theme_name) {
    var theme = getTheme(theme_name);
    return {
        container: {
            flex: 1,
            backgroundColor: theme.Container.backgroundColor,
            alignItems: 'center',
            justifyContent: 'center',
        },

        title: {
            fontSize: 20,
            color: theme.Title.color,
        },

        button: {
            backgroundColor: theme.Button.backgroundColor,
            width: "70%",
            borderRadius: 10,
            alignItems: 'center',
            padding: 10,
            borderBlockColor: theme.Button.borderBlockColor,
            position: "absolute",
            bottom: "10%"
        },

        button_text: {
            fontSize: 22,
            color: theme.ButtonText.color,
        },

        input_box: {
            backgroundColor: theme.InputBox.backgroundColor,
            textAlign: "center",
            color: theme.InputBox.color,
            marginTop: 10,
            marginBottom: 50,
            padding: 10,
            fontSize: 20,
            width: "70%",
            borderRadius: 10,
        }
    }
    
}
export const styles = StyleSheet.create(getStyles());