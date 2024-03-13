//普通宣告
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';

//載入頁面
import Main_screen from './source/screen/Main_screen';
//navigation宣告
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Main_screen />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    top: 56,
    paddingBottom: 150
  },
  fix: {
    justifyContent: "space-between",
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    zIndex: 999,
  },
});
