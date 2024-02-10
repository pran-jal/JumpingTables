import { Text, View, TextInput, TouchableOpacity } from 'react-native';

//local
import { styles } from './styles';
import { Table } from '../../Table';


export const Home = ({navigation}) => {

    const table = new Table();
    
    return (
        <View style={styles.container}>
            <Text style = {styles.title}>Going from</Text>
            <TextInput 
                style = {styles.input_box}
                keyboardType = 'numeric'
                placeholder='Enter a number greater that 2'
                placeholderTextColor = "#2A2A2A"
                onChangeText={(text) => {table.start_from = text}}
                value={table.start_from}
            >  
            </TextInput> 
        
            <Text style = {styles.title}> up to </Text>
            <TextInput 
                style={styles.input_box}
                keyboardType = 'numeric'
                placeholder='Enter a number greater that 2'
                placeholderTextColor = "#2A2A2A"
                onChangeText={(text) => {table.end_at = text}}
                value={table.end_at}                  
            > 
            </TextInput> 
        
            <Text style = {styles.title}> with max multiplier </Text>
            <TextInput 
                style={styles.input_box}
                keyboardType = 'numeric'
                placeholder='Enter a number greater that 2'
                placeholderTextColor= "#2A2A2A"
                onChangeText={(text) => {table.max_multiplier = text}}
                value={table.max_multiplier}                
            > 
            </TextInput>

            <TouchableOpacity 
                style = {styles.button}
                onPress={() => navigation.navigate('Questions', table)}
            >
                <Text style = {styles.button_text}>
                    START
                </Text>
            </TouchableOpacity>
        </View>
    );
};