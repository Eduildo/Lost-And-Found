import { View, Text, Image } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const DotComponent = ({selected}) => {
    return(
      <View className={`w-4 h-4 mx-1 flex items-center justify-center rounded-full ${selected ? "bg-purple-500": ""} p-2`}>
        <View className={`w-2 h-2 ${selected ? "bg-purple-500":"bg-purple-300"} rounded-full`}>
        </View>
      </View>

    )
  }

  return (
    <Onboarding
    onSkip={() => navigation.replace("Home")}
    onDone={() => navigation.replace("Home")}
    DotComponent = {DotComponent}
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('../../../assets/9814.jpg')} className="w-72 h-72 object-contain" />,
      title: 'Bem Vindo',
      subtitle: 'LostTrack é uma aplicação de perdidos e achados que irá ajudar-lhe a encontrar o seu objeto perdido ',
    },
    {
      backgroundColor: '#fff',
      image: <Image source={require('../../../assets/9814.jpg')}  className="w-72 h-72 object-contain"/>,
      title: 'LostTrack',
      subtitle: 'Com interface simples e fácil de usar, encontre o seu objeto com apenas um click',
    },
    {
      backgroundColor: '#fff',
      image: <Image source={require('../../../assets/9814.jpg')}  className="w-72 h-72 object-contain" />,
      title: 'LostTrack',
      subtitle: 'Crie a sua conta agora e ajude outras pessoas a encontrar os seus objetos ou peça ajuda para encontrar o seu',
    },
  ]}
/>
  )
};

export default OnboardingScreen