import Routes from "./src/routes"
import 'react-native-gesture-handler'
import {AuthProvider} from './src/context/AuthContext'



export default function App(){

  return(
    <AuthProvider>
       < Routes/>
    </AuthProvider>

   
  );
  
}


