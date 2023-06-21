import {FlatList, Image, Pressable, StyleSheet} from "react-native";
import products from "../data/products";
//import {useNavigation} from "@react-navigation/native";
//import Navigation from "../Navigation";

const ProductScreen = ({ navigation }) =>
 {
     // const navigation = useNavigation();
    return (
        <FlatList
            data={products}
            renderItem={( item) => (
                <Pressable onPress={() => navigation.navigate('Product Details')} style={styles.itemContainer}>
                    <Image source={{ uri: item.item.image}} style={styles.image} />
                </Pressable>
            )}
            numColumns={2}
        />
    );
 }
const styles = StyleSheet.create({

    image: {
        width: "100%",
        aspectRatio: 1,
    },
    itemContainer: {
        width: '50%',
        padding: 1,
    }
});

export default ProductScreen;