import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
//普通宣告
import { TouchableOpacity, Text, View, Image } from 'react-native';
//react-native-paper提供的物件
import { IconButton } from 'react-native-paper';
import style from './style';

const CustomDrawerContent = ({ navigation, state, descriptors }) => {
    return (
        <DrawerContentScrollView navigation={navigation} state={state} descriptors={descriptors}>
            <View style={style.costomer_box}>
                <IconButton icon={"account-circle"} size={48} />
                <Text style={style.Heading1}>Ethan</Text>
            </View>
            <DrawerItemList navigation={navigation} state={state} descriptors={descriptors} />
            <TouchableOpacity onPress={() => alert('Custom button pressed')}>
                <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                    <Text>Custom Button</Text>
                </View>
            </TouchableOpacity>
        </DrawerContentScrollView>
    );
}

export default CustomDrawerContent;