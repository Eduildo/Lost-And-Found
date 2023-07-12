import React, { useContext, useState, useEffect } from 'react';
import {View, ActivityIndicator} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from 'tailwindcss-react-native';
import { Home, Login, OnboardingScreen, UserForm, } from '../components/screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerRoutes from "./drawer.routes"
import { AuthContext } from '../context/AuthContext';

 
const Stack = createNativeStackNavigator();

export default function StackRoutes(){

  const {isLoading, userToken} = useContext(AuthContext);
  if (isLoading){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <ActivityIndicator size={'large'}/>

      </View>
    )
      

  }

    const [isFirstLauch, setIsFirstLauch] = useState(false);
  useEffect(() => {
    
    AsyncStorage.getItem("alreadyLaunched").then((value) =>{
      if(value === null){
        AsyncStorage.SetItem("alreadyLaunched", "true");
        setIsFirstLauch(true);
      }else{
        setIsFirstLauch(false);
      }
    })
  }, [])

    return(
        <TailwindProvider>
          <Stack.Navigator>
         {isFirstLauch && (
           <Stack.Screen options={{headerShown:false} } name="OnboardingScreen" component={OnboardingScreen} />
         )}
{userToken !== null ? <Stack.Screen options={{headerShown:false}} name="Home" component={DrawerRoutes} />: 

<Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
}
         
          
          {/* <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
          <Stack.Screen options={{headerShown:false}} name="UserForm" component={UserForm} />
          {/*<Stack.Screen options={{headerShown:false}} name="ObjectForm" component={ObjectForm} />*/}
           
          </Stack.Navigator>
        </TailwindProvider>
    )
}