import * as React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//local
import { Home } from './src/screens/home/Home';
import { Questions } from './src/screens/questions/Questions'


const Stack = createNativeStackNavigator()

const App = () => {    
    return (
        <NavigationContainer> 
            <Stack.Navigator> 
                <Stack.Screen name = "Home" component = { Home } />
                <Stack.Screen name = "Questions" component = { Questions } />
            </Stack.Navigator> 
        </NavigationContainer> 
    );
};

export default App;
