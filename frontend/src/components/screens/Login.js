import {  View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';



const Login = () => {
    const navigation = useNavigation();
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
        />

        <TextInput
          className={` bg-white border border-slate-200 rounded-md h-12 px-4 `}
          placeholderTextColor="#000"
          placeholder="Enter password"
        />
         <Pressable className={`mb-4`}>
            <Text className={`text-[#428288]] font-bold`}>Reset password</Text>
          </Pressable>

        <Pressable
          className={`h-12 bg-[#428288] rounded-md flex flex-row justify-center items-center px-6`}
          onPress={() => navigation.replace('DrawerRoutes')}
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

export default Login