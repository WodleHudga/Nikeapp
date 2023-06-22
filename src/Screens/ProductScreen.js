import {FlatList, Image, Pressable, StyleSheet} from "react-native";
//import products from "../data/products";
//import {useNavigation} from "@react-navigation/native";
//import Navigation from "../Navigation";
import {useSelector, useDispatch} from 'react-redux';
import {ProductSlice} from "../store/ProductSlice";

const ProductScreen = ({ navigation }) =>
 {
     const products = useSelector((state) => state.products.products)
     // const navigation = useNavigation();
     const dispatch = useDispatch();
    return (
        <FlatList
            data={products}
            renderItem={( item) => (
                <Pressable onPress={() =>
                { //update selected product
                    dispatch(ProductSlice.actions.setSelectedProduct(item.item.id))

                    navigation.navigate('Product Details')} } style={styles.itemContainer}>
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