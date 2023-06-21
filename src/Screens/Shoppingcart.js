import {FlatList, Pressable, StyleSheet, Text, View} from "react-native";
import cart from "../data/cart";
import CartListItem from "../components/CartListItem";
const Shoppingcart = () => {

    const ShoppingCartTotals = () => (
        <View style={styles.totalContainer}>
            <View style={styles.row} >
                <Text style={styles.Text}>SubTotal</Text>
                <Text style={styles.Text}>410,00</Text>
            </View>
            <View style={styles.row} >
                <Text style={styles.Text}>Delivery</Text>
                <Text style={styles.Text}>10,00</Text>
            </View>
            <View style={styles.row} >
                <Text style={styles.TextBold}>Total</Text>
                <Text style={styles.TextBold}>420,00</Text>
            </View>
        </View>
    );

    return(
        <>
        <FlatList
            data={cart}
             renderItem={({item}) => <CartListItem cartItem={ item } /> }
            ListFooterComponent={(ShoppingCartTotals)}
            />
        <Pressable style={styles.Button}>
            <Text style={styles.ButtonText}>Checkout</Text>
        </Pressable>
        </>
    );
};

const styles = StyleSheet.create(
    {
        totalContainer: {
            paddingTop: 10,
            margin: 20,
            borderColor: 'gainsboro',
            borderTopWidth: 1,

        },
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',

        },
        Text: {
            fontSize: 16,
            color: 'grey',

        },
        TextBold:{
            fontSize: 16,
            color: 'grey',
            fontWeight: '500',
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
    });
export  default Shoppingcart;