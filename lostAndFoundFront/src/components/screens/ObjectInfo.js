

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
export default function ObjectInfo() {
  return (
    <SafeAreaView className="flex-1 bg-white relative">
    <ScrollView className="flex-1 px-4 py-6">
      <View className="relative bg-white shadow-lg">
        <Image
          source={
             "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"
          }
          className="w-full h-72 object-cover rounded-2xl"
        />

        <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
          <TouchableOpacity
            onPress={() => navigation.navigate("Discover")}
            className="w-10 h-10 rounded-md items-center justify-center bg-white"
          >
            <FontAwesome5 name="chevron-left" size={24} color="#06B2BE" />
          </TouchableOpacity>

          <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]">
            <FontAwesome5 name="heartbeat" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
          <View className="flex-row space-x-2 items-center">
            <Text className="text-[12px] font-bold text-gray-100">
              
            </Text>
            <Text className="text-[32px] font-bold text-gray-100">
              Preço
            </Text>
          </View>

          <View className="px-2 py-1 rounded-md bg-teal-100">
            <Text>Aqui o texto</Text>
          </View>
        </View>
      </View>

      <View className="mt-6">
        <Text className="text-[#428288] text-[24px] font-bold">
        </Text>
        <View className="flex-row items-center space-x-2 mt-2">
          <FontAwesome name="map-marker" size={25} color="#8C9EA6" />
          <Text className="text-[#8C9EA6] text-[20px] font-bold">
            Local
          </Text>
        </View>
      </View>

      <View className="mt-4 flex-row items-center justify-between">

          <View className=" flex-row items-center space-x-2">
            <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
              <FontAwesome name="star" size={24} color="#D58574" />
            </View>
            <View>
              <Text className="text-[#515151]"> algo </Text>
              <Text className="text-[#515151]">Ratings</Text>
            </View>
          </View>
  

     
          <View className=" flex-row items-center space-x-2">
            <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
              <MaterialIcons name="attach-money" size={24} color="black" />
            </View>
            <View>
              <Text className="text-[#515151]"> price level</Text>
              <Text className="text-[#515151]">Price Level</Text>
            </View>
          </View>
     

 
          <View className=" flex-row items-center space-x-2">
            <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
              <FontAwesome5 name="map-signs" size={24} color="black" />
            </View>
            <View>
              <Text className="text-[#515151] capitalize">
               Alguma coisa
              </Text>
              <Text className="text-[#515151]">Bearing</Text>
            </View>
          </View>
    
      </View>

      
        <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF]">
          Descrição
        </Text>


     
        <View className="flex-row gap-2 items-center justify-start flex-wrap mt-4">
        
            <TouchableOpacity
        
              className="px-2 py-1 rounded-md bg-emerald-100"
            >
              <Text></Text>
            </TouchableOpacity>
      
        </View>
   

      <View className=" space-y-2 mt-4 bg-gray-100 rounded-2xl px-4 py-2">
        
          <View className="items-center flex-row space-x-6">
            <FontAwesome name="phone" size={24} color="#428288" />
            <Text className="text-lg">955320790</Text>
          </View>
        
       
          <View className="items-center flex-row space-x-6">
            <FontAwesome name="envelope" size={24} color="#428288" />
            <Text className="text-lg">Email</Text>
          </View>
      
 
          <View className="items-center flex-row space-x-6">
            <FontAwesome name="map-pin" size={24} color="#428288" />
            <Text className="text-lg">Email</Text>
          </View>
    

        <View className="mt-4 px-4 py-4 rounded-lg bg-[#06B2BE] items-center justify-center mb-12">
          <Text className="text-3xl font-semibold uppercase tracking-wider text-gray-100">
            Book Now
          </Text>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
  )
}

