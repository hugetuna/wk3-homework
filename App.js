import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Book_list_new from './source/component/Book_list_new';
import Book_list_popular from './source/component/Book_list_popular';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Book_list_popular />
      <Book_list_new />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
