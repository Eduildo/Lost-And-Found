import {  View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const ObjectForm = () => {
    const navigation = useNavigation();
  return (
    <View className={`flex-1 items-center justify-center bg-slate-50`}>
      <View className={`p-8 w-full max-w-sm`}>
        <Text className={`text-2xl font-bold mb-6 text-slate-900`}>Adicionar novo objeto</Text>

        <TextInput
          className={`w-full bg-white border border-slate-200 rounded-md h-12 px-4 mb-4`}
          placeholderTextColor="#000"
          placeholder="Tipo de objeto"
        />
        <TextInput
          className={`w-full bg-white border border-slate-200 rounded-md h-12 px-4 mb-4`}
          placeholderTextColor="#000"
          placeholder="Descrição"
        />
        <TextInput
          className={`w-full bg-white border border-slate-200 rounded-md h-12 px-4 mb-4`}
          placeholderTextColor="#000"
          placeholder="Selecione um estado"
        />

        <TextInput
          className={`w-full bg-white border border-slate-200 rounded-md h-12 px-4 mb-4`}
          placeholderTextColor="#000"
          placeholder="Localização"
        />
      
      <Pressable
          className={`h-12 bg-yellow-600 rounded-md flex flex-row justify-center items-center px-6 mb-4`}
        >
          <View className={`flex-1 flex items-center`}>
            <Text className={`text-white text-base font-medium`}>Selecione uma foto</Text>
          </View>
        </Pressable>
     

        <Pressable
          className={`h-12 bg-purple-500 rounded-md flex flex-row justify-center items-center px-6`}
          onPress={() => navigation.navigate('Home')}
        >
          <View className={`flex-1 flex items-center`}>
            <Text className={`text-white text-base font-medium`}>Adicionar</Text>
          </View>
        </Pressable>
      </View>
    </View>
);}

export default ObjectForm