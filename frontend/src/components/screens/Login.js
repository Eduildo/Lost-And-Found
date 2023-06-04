import {  View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';



const Login = () => {
    const navigation = useNavigation();
  return (
    <View className={`flex-1 items-center justify-center bg-slate-50`}>
      <View className={`p-8 w-full max-w-sm`}>
        <Text className={`text-2xl font-bold mb-6 text-slate-900`}>Login</Text>

        <TextInput
          className={` bg-white border border-slate-200 rounded-md h-12 px-4 mb-4`}
          placeholderTextColor="#000"
          placeholder="Enter email address"
        />

        <TextInput
          className={` bg-white border border-slate-200 rounded-md h-12 px-4 `}
          placeholderTextColor="#000"
          placeholder="Enter password"
        />
         <Pressable className={`mb-4`}>
            <Text className={`text-blue-400 font-bold`}>Reset password</Text>
          </Pressable>

        <Pressable
          className={`h-12 bg-purple-500 rounded-md flex flex-row justify-center items-center px-6`}
          onPress={() => navigation.replace('DrawerRoutes')}
        >
          <View className={`flex-1 flex items-center`}>
            <Text className={`text-white text-base font-medium`}>Login</Text>
          </View>
        </Pressable>
        <View className={`flex items-center`}>
        <Text className={`text-slate-900`}>Não tens uma conta?</Text>
        <Pressable onPress={() => navigation.navigate('UserForm')}>
            <Text className={`text-blue-400 font-bold`}>Crie aqui</Text>
          </Pressable>
        </View>
      </View>
    </View>
);}

export default Login