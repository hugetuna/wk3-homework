//react自帶的material disign
import { PaperProvider } from 'react-native-paper';

//react-native-paper提供的物件
import { IconButton, Appbar } from 'react-native-paper';

//普通宣告
import { StyleSheet, Text, View, StatusBar, ScrollView, Button } from 'react-native';
//自己的物件
import Buy_content from '../component/Buy_content';
import BottomNavigationBar from '../component/BottomNavigationBar';
//json檔
import Book_new_data from "../json/book_new.json";

//書籤變動設定
import React, { useState } from 'react';

const BookshopScreen = ({ navigation, route }) => {
    const [iconpic, setIconpic] = useState('bookmark-outline');
    const handlePress = () => {
        if (iconpic == 'bookmark-outline')
            setIconpic('bookmark');
        else
            setIconpic('bookmark-outline');
    };
    return (
        <PaperProvider>
            <View style={styles.container}>
                <StatusBar />
                <Appbar style={styles.fix} mode="center-aligned">
                    <IconButton icon="less-than" size={40} onPress={() => navigation.navigate('main')} />
                    <IconButton icon={iconpic} size={40} onPress={handlePress} />
                </Appbar>
                <ScrollView>
                    <Buy_content good={Book_new_data[route.params.id]} />
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
    fix: {
        justifyContent: "space-between",
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        zIndex: 999,
    },
});

export default BookshopScreen;