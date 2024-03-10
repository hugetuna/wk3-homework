import { Text, View, Image, FlatList } from 'react-native';
import style from './style';

//引入列表內容
import Book_block_new from '../Book_block_new';
import Book_new_data from "../../json/book_new.json";

//新書列表
const Book_list_new = () => {
    return (
        <View>
            <FlatList
                data={Book_new_data}
                renderItem={({ item }) => <Book_block_new book={item} />}
                keyExtractor={item => item.bookpic}
            />
        </View>
    );
};

export default Book_list_new;