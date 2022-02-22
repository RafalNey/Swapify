import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Home/Home';
import Login from '../components/Login';
import Marketplace from '../components/Marketplace';
import Register from '../components/Register';
import User from '../components/User/User';
import UserList from '../components/User/UserList';
import UserSwaps from '../components/User/UserSwaps';
import UserAgreement from '../components/UserAgreement';
import Privacy from '../components/Privacy'

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Group>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='User' component={User} />
        <Stack.Screen name='Marketplace' component={Marketplace} />
        <Stack.Screen name='My List' component={UserList} />
        <Stack.Screen name='Swaps' component={UserSwaps} />
        {/* <Stack.Screen name='Messages' component={Messages}/> */}
        <Stack.Screen name='User Agreement' component={UserAgreement}/>
        <Stack.Screen name='Privacy' component={Privacy}/>
       
      </Stack.Group>
      <Stack.Group
        screenOptions={{ headerShown: false, presentation: 'modal' }}
      >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        {/* Register 
            AddItem
            Leave Comment? 
            Error */}
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default StackNavigator;
