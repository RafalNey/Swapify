import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Home/Home';
import Login from '../components/Login';
import Marketplace from '../components/Marketplace';
import User from '../components/User/User';
import UserList from '../components/User/UserList';
import UserSwaps from '../components/User/UserSwaps';

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
        {/* Messages 
            Legal*/}
      </Stack.Group>
      <Stack.Group
        screenOptions={{ headerShown: false, presentation: 'modal' }}
      >
        <Stack.Screen name='Login' component={Login} />
        {/* Register 
            AddItem
            Leave Comment? 
            Error */}
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default StackNavigator;
