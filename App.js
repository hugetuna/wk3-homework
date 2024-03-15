import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Button } from 'react-native';
//載入頁面
import MainScreen from './source/screen/MainScreen';
import BookshopScreen from './source/screen/BookshopScreen';
import CustomDrawerContent from './source/component/CustomDrawerContent';
//navigation宣告
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
//test用頁面
import Buy_content from './source/component/Buy_content';

function DetailsScreen({ navigation }) {
  return (
    <Buy_content />
  );
}

//各頁面的堆疊
const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="main">
      <Stack.Screen name='main' component={MainScreen} />
      <Stack.Screen name='buy' component={BookshopScreen} />
    </Stack.Navigator>
  );

}


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}
        drawerStyle={{
          backgroundColor: '#f0f0f0',
          width: 200,
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={MainStack} />
      </Drawer.Navigator>
    </NavigationContainer>

  );
}
