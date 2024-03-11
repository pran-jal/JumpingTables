import React, { Component } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native';

//local
import { styles } from './styles';
import { Table } from '../../Table';



export const Questions = ({route, navigation}) => {
    
    const table = new Table(route.params.start, route.params.end, route.params.max_multiplier);
    
    class Answer extends Component {
        state = {
            show_answer: 'Show Answer',
            showed: false
        }
    
        change_text = () => {
            if (!this.state.showed) {
                this.setState({
                    show_answer: this.props.table.calc_answer(),
                    showed: true
                });
            } 
            
            else {
                this.setState({
                    show_answer: "Show Answer",
                    showed: false
                });
            }
        }
    
        render() {
            return (
                <Pressable
                    style={styles.answer_button}
                    onPress={this.change_text}
                >
                    <Text
                        style={styles.option_button_text}
                    >
                        {this.state.show_answer}
                    </Text>
                </Pressable>
            )
        }
    }

    return (
        <View style={styles.container}>
            <Text style = {styles.title}>what is</Text>
            <TextInput 
                style = {styles.display_box}
                readOnly = {true}
                value = {table.jump()}
            >
            </TextInput>

            <View style = {styles.option_container}>

                <View style = {styles.flex_container}>
                    <Pressable style = {styles.option}>
                        <Text style = {styles.option_button_text}>
                            {table.options[0]}
                        </Text>
                    </Pressable>
    
                    <Pressable style = {styles.option}>
                        <Text style = {styles.option_button_text}>
                            {table.options[1]}
                        </Text>
                    </Pressable>
                </View>
                
                <View style = {styles.flex_container}>
                    <Pressable style = {styles.option}>
                        <Text style = {styles.option_button_text}>
                                {table.options[2]}
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.option}>
                        <Text style = {styles.option_button_text}>
                            {table.options[3]}
                        </Text>
                    </Pressable>
                </View>
            
            </View>

            <Answer table ={table}/>

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
                <Text style = {styles.option_button_text}>
                    NEXT
                </Text>
            </Pressable>
        </View>
    );
};
