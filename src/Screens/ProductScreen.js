import {ActivityIndicator, FlatList, Image, Pressable, StyleSheet, Text} from "react-native";
//import products from "../data/products";
//import {useNavigation} from "@react-navigation/native";
//import Navigation from "../Navigation";
import {useGetAllProductsQuery} from "../store/apiSlice";
import { useDispatch} from 'react-redux';
import {ProductSlice} from "../store/ProductSlice";
// import {route} from "express/lib/router";

const ProductScreen = ({ navigation }) =>
 {
     //const id = route.params.id;
    //const products = useSelector((state) => state.products.products)
     // const navigation = useNavigation();
        const {data, error, isLoading} = useGetAllProductsQuery();

     if(isLoading){
         console.log(isLoading)
         return <ActivityIndicator />
     }
     if(error){
         console.log(error)
         return <Text>Error while getting data: {error.error}</Text>
     }
   const products = data.data;
console.log(data);



     const dispatch = useDispatch();
    return (
        <FlatList
            data={products}
            renderItem={( item) => (
                <Pressable onPress={() =>
                { //update selected product
                    dispatch(ProductSlice.actions.setSelectedProduct(item.item.id))


                    navigation.navigate('Product Details', {id: item.item.id})} } style={styles.itemContainer}>
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