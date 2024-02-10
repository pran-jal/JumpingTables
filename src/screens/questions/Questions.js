import { Text, View } from 'react-native';


export const Questions = ({route, navigation}) => {
    const table = route.params;
    console.log(route)
    return (
        <View>
            <Text>{table.start_from}</Text>
        </View>
    );
};
