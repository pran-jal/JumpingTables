import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

//local
import { styles } from './src/styles';
import { Table } from './src/Table';

const App = () => {
    
    const table = new Table();

    function gettablevalue(){
        return String(table.start_from);
    }


    return (
            <View style={styles.container}>
                <Text style = {styles.title}>Going from</Text>
                <TextInput 
                    style = {styles.input_box}
                    keyboardType = 'numeric'
                    placeholder='Enter a number greater that 2'
                    placeholderTextColor = "#2A2A2A"
                    onChangeText={(text) => {table.start_from = text}}
                >  
                    {table.start_from}           
                </TextInput> 
                
                <Text style = {styles.title}> up to </Text>
                <TextInput 
                    style={styles.input_box}
                    keyboardType = 'numeric'
                    placeholder='Enter a number greater that 2'
                    placeholderTextColor = "#2A2A2A"
                    onChangeText={(text) => {table.end_at = text}}
                > 
                    {table.end_at}                   
                </TextInput> 
                
                <Text style = {styles.title}> with max multiplier </Text>
                <TextInput 
                    style={styles.input_box}
                    keyboardType = 'numeric'
                    placeholder='Enter a number greater that 2'
                    placeholderTextColor= "#2A2A2A"
                    onChangeText={(text) => {table.max_multiplier = text}}
                > 
                    {table.max_multiplier}                   
                </TextInput> 

                <TouchableOpacity 
                    style = {styles.button}
                    onPress={() => Alert.alert(`${table.start_from} ${table.end_at} ${table.max_multiplier}`)}
                >
                    <Text style = {styles.button_text}>
                        START
                    </Text>
                </TouchableOpacity>
            </View>
    );
};


export default App;
