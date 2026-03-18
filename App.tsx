import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from './src/theme/ThemeContext';

import AppNavigator from './src/navigation/AppNavigator';
import { queryClient } from './src/services/queryClient';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-800">
      <Text className="text-white text-xl font-bold">Funcionando 🚀</Text>
    </View>
    // <QueryClientProvider client={queryClient}>
    //   <ThemeProvider>
    //     <NavigationContainer>
    //       <AppNavigator />
    //     </NavigationContainer>
    //   </ThemeProvider>
    // </QueryClientProvider>
  );
}
