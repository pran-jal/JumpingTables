import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Alert } from 'react-native';

//local
import { styles } from './src/styles';
import { Table } from './src/Table';




table = new Table()
const App = () => {

    return (
            <View style={styles.container}>
                <Text style = {styles.title}>Going from</Text>
                <Button title={table.start_from}/>
                <Text style = {styles.title}> up to </Text>
                <Button title={table.end_At}/>
                {/* <Text style={styles.title}>Hello World!</Text> */}
                <StatusBar style="auto" />
            </View>
    );
};


export default App;
