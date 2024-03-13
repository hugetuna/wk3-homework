import { StyleSheet, Text, View, Button } from 'react-native';
//載入頁面
import MainScreen from './source/screen/MainScreen';
//navigation宣告
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
//test用頁面
function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('test')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('main')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="main">
        <Stack.Screen name='main' component={MainScreen} />
        <Stack.Screen name='test' component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
