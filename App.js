import { StyleSheet, Text, View, Button } from 'react-native';
//載入頁面
import MainScreen from './source/screen/MainScreen';
import BookshopScreen from './source/screen/BookshopScreen';
//navigation宣告
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
//test用頁面
import Buy_content from './source/component/Buy_content';

function DetailsScreen({ navigation }) {
  return (
    <Buy_content />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="main">
        <Stack.Screen name='main' component={MainScreen} />
        <Stack.Screen name='buy' component={BookshopScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
