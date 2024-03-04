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
            margin: "20%",
            position: "relative"
        },

        option: {
            backgroundColor: theme.Button.backgroundColor,
            width: "100%",
            borderRadius: 10,
            alignItems: 'center',
            padding: 10,
            borderBlockColor: theme.Button.borderBlockColor,
            alignSelf: "center",
            margin: 10
        },

        option_button_text: {
            fontSize: 22,
            color: theme.ButtonText.color
        },

        input_box: {
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