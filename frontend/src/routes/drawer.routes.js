import {createDrawerNavigator} from '@react-navigation/drawer';
import {Feather } from '@expo/vector-icons';

import TabRoutes from './tab.routes';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){

    return(
        <Drawer.Navigator  drawerContent={props => <CustomDrawer{...props} />} useLegacyImplementation={true} screenOptions={{title:''}}>
            
            <Drawer.Screen name="home" 
            component={TabRoutes}
            options={{drawerIcon: ({color, size}) => <Feather name="home" color={color} size={size} />, 
            drawerLabel: 'Inicio'}} />

            <Drawer.Screen name="profile" 
            component={TabRoutes}
            options={{drawerIcon: ({color, size}) => <Feather name="user" color={color} size={size} />, 
            drawerLabel: 'Meu Perfil'}} />


        <Drawer.Screen name="settings" 
            component={TabRoutes}
            options={{drawerIcon: ({color, size}) => <Feather name="settings" color={color} size={size} />, 
            drawerLabel: 'Configurações'}} />

            <Drawer.Screen name="help" 
            component={TabRoutes}
            options={{drawerIcon: ({color, size}) => <Feather name="help-circle" color={color} size={size} />, 
            drawerLabel: 'Ajuda'}} />

            <Drawer.Screen name="quit" 
            component={TabRoutes}
            options={{drawerIcon: ({color, size}) => <Feather name="log-out" color={color} size={size} />, 
            drawerLabel: 'Sair'}} />
        </Drawer.Navigator>
    )
}