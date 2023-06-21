import {FlatList, Image, StyleSheet, View} from "react-native";
import products from "../data/products";

const ProductScreen = () =>
 {
    return (
        <FlatList
            data={products}
            renderItem={( item) => (
                <View style={styles.itemContainer}>
                    <Image source={{ uri: item.item.image}} style={styles.image} />
                </View>
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