import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { Home, Configuration, ObjectForm } from "../components/screens";
import { AuthProvider } from "../context/AuthContext";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <AuthProvider>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" color={color} size={size} />
            ),
            tabBarLabel: "Inicio",
          }}
        />

        <Tab.Screen
          name="ObjectForm"
          component={ObjectForm}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="plus" color={color} size={size} />
            ),
            tabBarLabel: "Novo",
          }}
        />

        <Tab.Screen
          name="Configuration"
          component={Configuration}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="settings" color={color} size={size} />
            ),
            tabBarLabel: "Configuração",
          }}
        />
      </Tab.Navigator>
    </AuthProvider>
  );
}
