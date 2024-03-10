import { Text, View, Image } from 'react-native';
import Starbar from '../Starbar';
import style from './style';

//單個新書組件
const Book_block_new = (porps) => {
    let { book } = porps;
    return (
        <View style={style.box}>
            <Image style={style.pic} source={{ uri: book.bookpic }} />
            <Starbar rank={book.rank} />
            <Text style={style.heading2}>{book.bookName}</Text>
            <Text style={style.body2}>{book.bookAuthor}</Text>
        </View>
    );
}

export default Book_block_new;