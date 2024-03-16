//react自帶的material disign
import { PaperProvider } from 'react-native-paper';

//react-native-paper提供的物件
import { IconButton, Appbar } from 'react-native-paper';

//普通宣告
import { StyleSheet, Text, View, StatusBar, ScrollView, Button } from 'react-native';
//自己的物件
import Book_list_new from '../component/Book_list_new';
import Book_list_popular from '../component/Book_list_popular'
import BottomNavigationBar from '../component/BottomNavigationBar';

const MainScreen = ({ navigation }) => {
    return (
        <PaperProvider>
            <View style={styles.container}>
                <StatusBar />
                <Appbar style={styles.fix} mode="center-aligned">
                    <IconButton icon="menu" size={40} onPress={navigation.openDrawer} />
                    <IconButton icon="magnify" size={40} />
                </Appbar>
                <ScrollView contentContainerStyle={styles.content}>
                    <Book_list_popular />
                    <Book_list_new navigation={navigation} />
                </ScrollView>
                <BottomNavigationBar />
            </View>
        </PaperProvider>
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

export default MainScreen;