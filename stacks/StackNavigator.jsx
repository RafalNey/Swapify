import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Home';
import User from '../components/User/User';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='User' component={User} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default StackNavigator;
