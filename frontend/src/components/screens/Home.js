import {
  SafeAreaView,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Perdidos, Achados } from "../../../assets";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MenuContainer from "../MenuContainer";

import { FontAwesome } from "@expo/vector-icons";
import ItemCardContainer from "../ItemCardContainer";
import { getPlacesData } from "../../../api";

export default function Home() {
  const navigation = useNavigation();

  const [type, setType] = useState("perdidos");
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[40px] text-[#0B646b] font-bold">
            LostTrack
          </Text>
          <Text className="text-[#527283] text-[36px]">
            Encontre o seu objeto
          </Text>
        </View>
      </View>

      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          placeholder="Search"
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
          }}
          query={{
            key: "AIzaSyDWVvpx5KcTUZ6RGCYJWG7eFdVy7lJYMBM",
            language: "pt-pt",
          }}
        />
      </View>

      {/* Menu Container */}
      <View className=" flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#0B646B" />
      </View>
      <ScrollView>
        <View className=" flex-row items-center justify-between px-8 mt-8">
          <MenuContainer
            key={"perdidos"}
            title="Perdidos"
            imageSrc={Perdidos}
            type={type}
            setType={setType}
          />

          <MenuContainer
            key={"achados"}
            title="Achados"
            imageSrc={Achados}
            type={type}
            setType={setType}
          />
        </View>

        <View>
          <View className="flex-row items-center justify-between px-4 mt-8">
            <Text className="text-[#2C7379] text-[28px] font-bold">
              Top objetos
            </Text>
            <TouchableOpacity className="flex-row items-center justify-center space-x-2">
              <Text className="text-[#A0C4C7] text-[20px] font-bold">
                Explorar
              </Text>
              <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
            </TouchableOpacity>
          </View>

          <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
            <ItemCardContainer
              key={"101"}
              imageSrc={
                "https://cdn.pixabay.com/photo/2023/06/07/18/14/giraffes-8047856_1280.jpg"
              }
              title="something very biger for some people"
              location="Lisboa"
            />

            <ItemCardContainer
              key={"102"}
              imageSrc={
                "https://cdn.pixabay.com/photo/2014/12/22/10/04/lions-577104_1280.jpg"
              }
              title="sample"
              location="Leiria"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
