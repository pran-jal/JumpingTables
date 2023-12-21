import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';

//local
import { styles } from './src/styles';


const App = () => {

    return (
            <View style={styles.container}>
                <Text style={styles.title}>Hello World!</Text>
                <StatusBar style="auto" />
            </View>
    );
};


export default App;
