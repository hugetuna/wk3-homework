import { Text, View, Image } from 'react-native';
import style from './style';

//單個暢銷書組件
const Book_block_popular = () => {
    return (
        <View style={style.box}>
            <Image style={style.picture}
                source={require("../../img/popular_1.png")} />
            <Text style={style.heading2}>Fashionopolis</Text>
            <Text style={style.body2}>Dana Thomas</Text>
        </View>
    );
};

export default Book_block_popular;