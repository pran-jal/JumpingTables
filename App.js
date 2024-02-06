import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//local
import { Home } from './src/screens/home/Home';
import { Questions } from './src/screens/questions/Questions'
import { Table } from './src/Table';

const Stack = createNativeStackNavigator()

const App = () => {

    const table = new Table();
    
    return (
        <NavigationContainer> 
            <Stack.Navigator> 
                <Stack.Screen name="home" component = { Home } />
                <Stack.Screen name="questions" component = { Questions } options = {{data: table.start_from}} />
            </Stack.Navigator> 
        </NavigationContainer> 
    );
};


export default App;
