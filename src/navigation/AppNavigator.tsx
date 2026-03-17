import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../app/home/HomeScreen';
import FavoritesScreen from '../app/favorites/FavoritesScreen';
import ProfileScreen from '../app/profile/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favoritos" component={FavoritesScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
