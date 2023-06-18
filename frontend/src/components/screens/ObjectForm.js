import { View, Text, TextInput, Pressable, ScrollView, SafeAreaView } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const ObjectForm = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Perdido', value: 'achado'},
    {label: 'Achado', value: 'perdido'}
  ]);

  const navigation = useNavigation();
  return (
    <SafeAreaView>
     {/* After i need to fix scrool view, becauuse of virtualized list*/}
      <View className={`h-full w-full flex-1 items-center justify-center bg-slate-50`}>
        <View className={`p-8 w-full max-w-sm`}>
          <Text className={`text-2xl font-bold mt-6 mb-10 text-slate-900`}>
            Adicionar novo objeto
          </Text>

          <TextInput
            className={`w-full bg-white border border-slate-200 rounded-md h-12 px-4 mb-4`}
            placeholderTextColor="#000"
            placeholder="Tipo de objeto"
          />
          <TextInput
            className={`w-full bg-white h-28 border border-slate-200 rounded-md px-4 mb-4`}
            placeholderTextColor="#000"
            placeholder="Descrição"
          />


<DropDownPicker
className={`w-full bg-white border border-slate-200 rounded-md h-12 px-4 mb-4`}
placeholder="Selecione o estado do objeto"
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />

          <TextInput
            className={`w-full bg-white border border-slate-200 rounded-md h-12 px-4 mb-4`}
            placeholderTextColor="#000"
            placeholder="Local encontrado"
          />

          <Pressable
            className={`h-12 bg-[#6de1ec] rounded-md flex flex-row justify-center items-center px-6 mb-4`}
          >
            <View className={`flex-1 flex items-center`}>
              <Text className={`text-white text-base font-medium`}>
                Imagem do objeto
              </Text>
            </View>
          </Pressable>

          <Pressable
            className={`h-12 bg-[#428288] rounded-md flex flex-row justify-center items-center px-6`}
            onPress={() => navigation.navigate("Home")}
          >
            <View className={`flex-1 flex items-center`}>
              <Text className={`text-white text-base font-medium`}>
                Adicionar
              </Text>
            </View>
          </Pressable>
        </View>
      </View>

    </SafeAreaView>
  );
};

export default ObjectForm;
