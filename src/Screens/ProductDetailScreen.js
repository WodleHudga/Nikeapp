import products from "../data/products";
import {FlatList, Image, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View} from "react-native";

const ProductDetailScreen = () => {
    const product = products[0];
const {width} = useWindowDimensions();

const addTocart = () => {
console.warn('add ti cart');
    };
    return(
        <View>
            <ScrollView>
            <FlatList
                data={product.images}
                renderItem={({item}) => (
                    <Image
                        source={{ uri: item}}
                        style={{width:width, aspectRatio: 1}}
                    />

                )}
                horizontal
                pagingEnabled
                // showsHorizontalScrollIndicator={false}
            />
            <View style={{padding: 20}}>
            <Text style={styles.title}>
                {product.name}
            </Text>

            <Text style={styles.price}>₹ {product.price}
            </Text>

            <Text style={styles.description}>
                {product.description}
            </Text>
            </View>
            </ScrollView>

            <Pressable onPress={addTocart} style={styles.Button}>
                <Text style={styles.ButtonText}>Add to Cart</Text>
            </Pressable>


        </View>
    );
};

const styles = StyleSheet.create(
    {
        title: {
            fontSize: 34,
            fontWeight: '500',
            marginVertical: 10,
        },
        price : {
            fontSize: 16,
            fontWeight: '500',
            letterSpacing: 1.5,
        },
        description: {
            fontSize: 18,
            fontWeight: '300',
            // lineHeight: 30,
            marginVertical: 10,
        },
        Button: {
            position: "absolute",
            backgroundColor: 'black',
            bottom: 30,
            width: '90%',
            alignSelf: 'center',
            padding: 20,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',

        },
        ButtonText: {
            color: 'white',
            fontWeight: '500',
            fontSize: 16,


        },
    }
    );

export default ProductDetailScreen;