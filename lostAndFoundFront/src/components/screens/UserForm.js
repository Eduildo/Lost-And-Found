import {  View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const UserForm = () => {
    const navigation = useNavigation();
  return (
    <View className={`flex-1 items-center justify-center bg-slate-50`}>
      <View className={`p-8 w-full max-w-sm`}>
        <Text className={`text-2xl font-bold mb-6 text-slate-900`}>Nova conta</Text>

        <TextInput
          className={`w-full bg-white border border-slate-200 rounded-md h-12 px-4 mb-4`}
          placeholderTextColor="#000"
          placeholder="Nome"
        />
        <TextInput
          className={`w-full bg-white border border-slate-200 rounded-md h-12 px-4 mb-4`}
          placeholderTextColor="#000"
          placeholder="Apelido"
        />
        <TextInput
          className={`w-full bg-white border border-slate-200 rounded-md h-12 px-4 mb-4`}
          placeholderTextColor="#000"
          placeholder="Email"
        />

        <TextInput
          className={`w-full bg-white border border-slate-200 rounded-md h-12 px-4 mb-4`}
          placeholderTextColor="#000"
          placeholder="Palavra passe"
        />
        <TextInput
          className={`w-full bg-white border border-slate-200 rounded-md h-12 px-4 mb-4`}
          placeholderTextColor="#000"
          placeholder="Confirme a Palavra passe"
        />

     

        <Pressable
          className={`h-12 bg-[#428288] rounded-md flex flex-row justify-center items-center px-6`}
          onPress={() => navigation.navigate('Login')}
        >
          <View className={`flex-1 flex items-center`}>
            <Text className={`text-white text-base font-medium`}>Criar Conta</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );}

export default UserForm