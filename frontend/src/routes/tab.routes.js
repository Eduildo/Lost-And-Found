import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Feather } from '@expo/vector-icons';
import { Home, Configuration, ObjectForm } from '../components/screens';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>

            <Tab.Screen name="feed" component={Home}  
            options={{tabBarIcon: ({color, size}) => <Feather name="home" color={color} size={size} />,
            tabBarLabel: 'Inicio'}}/>
           
           
            <Tab.Screen name="new" component={ObjectForm} 
            options={{tabBarIcon: ({color, size}) => <Feather name="plus" color={color} size={size} />,
            tabBarLabel: 'Novo' }} />

            <Tab.Screen name="configuration" component={Configuration} 
            options={{tabBarIcon: ({color, size}) => <Feather name="settings" color={color} size={size} />,
            tabBarLabel: 'Configuração' }} />
        </Tab.Navigator>

        
    )
}