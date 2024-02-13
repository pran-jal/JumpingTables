import { Pressable, Text, TextInput, View } from 'react-native';

//local
import { styles } from './styles';
import { Table } from '../../Table';



export const Questions = ({route, navigation}) => {
    
    const table = new Table(route.params.start, route.params.end, route.params.max_multiplier);



    return (
        <View style={styles.container}>
            <Text style = {styles.title}>what is</Text>
            <TextInput 
                style = {styles.input_box}
                readOnly = {true}
                value = {table.jump()}
            >
            </TextInput>

            <View
                style = {{ padding: 50, marginTop: 40 }}
            >
                <Pressable style = {styles.option}>
                    <Text style = {styles.button_text}>
                        {table.options[0]}
                    </Text>
                </Pressable>
    
                <Pressable style = {styles.option}>
                    <Text style = {styles.button_text}>
                        {table.options[1]}
                    </Text>
                </Pressable>
    
                <Pressable style = {styles.option}>
                    <Text style = {styles.button_text}>
                            {table.options[2]}
                    </Text>
                </Pressable>

                <Pressable style = {styles.option}>
                    <Text style = {styles.button_text}>
                        {table.options[3]}
                    </Text>
                </Pressable>
            </View>

        
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
                    NEXT
                </Text>
            </Pressable>
        </View>
    );
};
