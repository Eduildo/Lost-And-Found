import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Perdidos, Achados } from "../../../assets";
import React, { useLayoutEffect, useState, useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import MenuContainer from "../MenuContainer";

import { FontAwesome } from "@expo/vector-icons";
import ItemCardContainer from "../ItemCardContainer";
import { AuthContext } from "../../context/AuthContext";
import api from "../../services/api";

export default function Home() {
  const { userToken, userInfo } = useContext(AuthContext);
  const navigation = useNavigation();
  const [type, setType] = useState("perdidos");
  const [objects, setObjects] = useState([]);

  async function loadObject() {
    console.log(userToken);
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`, // Adicione o token no cabeçalho de autorização
      },
    };
    const response = await api.get(`/objects/all`, config);

    setObjects(response.data);
    console.log(response.data.objects);
  }

  useLayoutEffect(() => {
    console.log(objects);
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    loadObject();
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
            console.log(objects);
          }}
          query={{
            key: "AIzaSyDWVvpx5KcTUZ6RGCYJWG7eFdVy7lJYMBM",
            language: "pt-pt",
          }}
        />
      </View>

      {/* Menu Container */}
      <View className=" flex-1 items-center justify-center"></View>
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
            {objects.map((object) => (
              <ItemCardContainer
                key={object.id}
                imageSrc={object.photo}
                title={object.title}
                location={object.local_founds}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
