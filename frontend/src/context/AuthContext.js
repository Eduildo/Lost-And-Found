import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    checkIfLoggedIn(); // Verificar se o usuário está logado ao inicializar o componente
  }, []);

  const checkIfLoggedIn = async () => {
    setIsLoading(true);
    try {
      const storedToken = await AsyncStorage.getItem("userToken");
      const storedUserInfo = await AsyncStorage.getItem("userInfo");

      if (storedToken && storedUserInfo) {
        api.defaults.headers.Authorization = `Bearer ${storedToken}`;
        setUserToken(storedToken);
        setUserInfo(JSON.parse(storedUserInfo));
      }
    } catch (error) {
      console.log("checkIfLoggedIn error:", error);
    }

    setIsLoading(false);
  };

  const login = async (email, password) => {
    try {
      const response = await api.post(`/sessions`, {
        email,
        password,
      });

      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
      const responseUser = await api.get(`/me`);

      await AsyncStorage.setItem("userToken", response.data.token);
      await AsyncStorage.setItem(
        "userInfo",
        JSON.stringify(responseUser.data.user)
      );
      setUserToken(response.data.token);
      setUserInfo(JSON.parse(responseUser.data.user));
    } catch (error) {
      console.log("login error:", error);
    }
  };

  const logout = async () => {
    try {
      navigation.navigate("Login");
      await AsyncStorage.clear();
      setUserToken(null);
      setUserInfo(null);
    } catch (error) {
      console.log("logout error:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isLoading,
        userToken,
        userInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
