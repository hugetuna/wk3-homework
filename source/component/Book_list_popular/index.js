import { Text, View, Image, FlatList } from 'react-native';
import style from './style';

//引入列表內容
import Book_block_popular from '../Book_block_popular';
import Book_popular_data from "../../json/book_popular.json"
//新書列表
const Book_list_popular = () => {
    return (
        <View style={style.box}>
            <Text style={style.Heading1}>Popular Books</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={Book_popular_data}
                renderItem={({ item }) => <Book_block_popular book={item} />}
                keyExtractor={item => item.bookpic}
            />
        </View>
    );
};

export default Book_list_popular;