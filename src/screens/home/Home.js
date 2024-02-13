import { Text, View, TextInput, Pressable } from 'react-native';

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
                inputMode='numeric'
                placeholder='Enter a number greater that 2'
                placeholderTextColor = "#2A2A2A"
                onChangeText={(text) => {table.start_from = text}}
                defaultValue={String(table.start_from)}
            >  
            </TextInput> 
        
            <Text style = {styles.title}> up to </Text>
            <TextInput 
                style={styles.input_box}
                inputMode = 'numeric'
                placeholder='Enter a number greater that 2'
                placeholderTextColor = "#2A2A2A"
                onChangeText={(text) => {table.end_at = text}}
                defaultValue ={String(table.end_at)}      
            > 
            </TextInput> 
        
            <Text style = {styles.title}> with max multiplier </Text>
            <TextInput 
                style={styles.input_box}
                inputMode = 'numeric'
                placeholder='Enter a number greater that 2'
                placeholderTextColor= "#2A2A2A"
                onChangeText={(text) => {table.max_multiplier = text}}
                defaultValue = {String(table.max_multiplier)}             
            > 
            </TextInput>

            <Pressable 
                style = {styles.button}
                onPress={() => navigation.navigate({
                    name: 'Questions',
                    params: {
                        start: table.start_from,
                        end: table.end_at,
                        max_multiplier: table.max_multiplier
                    }
                })}
            >
                <Text style = {styles.button_text}>
                    START
                </Text>
            </Pressable>
        </View>
    );
};