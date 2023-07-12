import {  View, Text, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//import { UserContext, UserProvider }from './userContext'; './userContext'

const navigation = useNavigation();

const Login = () => {
  c//onst {setUser}  = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleLogin = async () => {

    try {
      const response = await fetch('http://localhost:3333/sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const userData = await response.json();
       // setUser(userData);
        console.log(userData);
        await AsyncStorage.setItem('user', JSON.stringify(userData))
        navigation.navigate('Home');
      } else {
        // Login falhou
        const errorData = await response.json();
        const errorMessage = errorData.message || 'Erro de login';
        Alert.alert('Erro', errorMessage);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Erro de conexão');
    }
  };

    


    
  return (
    <View className={`flex-1 items-center justify-center bg-slate-50`}>
      <View className="flex-row items-center justify-between px-8">
        <View>
            <Text className="text-[40px] text-[#0B646b] font-bold">LostTrack</Text>
        </View>
        </View>
      <View className={`p-8 w-full max-w-sm`}>
        <Text className={`text-2xl font-bold mb-6 text-[#428288]`}>Login</Text>

        <TextInput
          className={` bg-white border border-slate-200 rounded-md h-12 px-4 mb-4`}
          placeholderTextColor="#000"
          placeholder="Enter email address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          className={` bg-white border border-slate-200 rounded-md h-12 px-4 `}
          placeholderTextColor="#000"
          placeholder="Enter password"
          value={password}
        onChangeText={setPassword}
        />
         <Pressable className={`mb-4`}>
            <Text className={`text-[#428288]] font-bold`}>Reset password</Text>
          </Pressable>

        <Pressable
          className={`h-12 bg-[#428288] rounded-md flex flex-row justify-center items-center px-6`}
          onPress={handleLogin}
        >
          <View className={`flex-1 flex items-center`}>
            <Text className={`text-white text-base font-medium`}>Login</Text>
          </View>
        </Pressable>
        <View className={`flex items-center`}>
        <Text className={`text-slate-900`}>Não tens uma conta?</Text>
        <Pressable onPress={() => navigation.navigate('UserForm')}>
            <Text className={`text-[#428288]] font-bold`}>Crie aqui</Text>
          </Pressable>
        </View>
      </View>
    </View>
);}

//export { UserProvider, UserContext };
export default Login