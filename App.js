import { Text, View, Button, TextInput, Alert } from 'react-native';

//local
import { styles } from './src/styles';
import { Table } from './src/Table';

const App = () => {
    
    table = new Table();


    return (
            <View style={styles.container}>
                <Text style = {styles.title}>Going from</Text>
                <TextInput 
                    style = {styles.input_box}
                    keyboardType = 'numeric'
                    placeholder='Enter a number greater that 2'
                    placeholderTextColor = "#2A2A2A"
                    id="start_from"
                    name="end_from"
                >  
                    {table.start_from}           
                </TextInput> 
                
                <Text style = {styles.title}> up to </Text>
                <TextInput 
                    style={styles.input_box}
                    keyboardType = 'numeric'
                    placeholder='Enter a number greater that 2'
                    placeholderTextColor = "#2A2A2A"
                    name="end_at"

                > 
                    {table.end_at}                   
                </TextInput> 
                
                <Text style = {styles.title}> with max multiplier </Text>
                <TextInput 
                    style={styles.input_box}
                    keyboardType = 'numeric'
                    placeholder='Enter a number greater that 2'
                    placeholderTextColor= "#2A2A2A"
                    id="max_multiplier"
                    
                > 
                {table.max_multiplier}                   
                </TextInput> 

                <Button 
                    style = {styles.button}
                    title="START">
                </Button>
            </View>
    );
};


export default App;
