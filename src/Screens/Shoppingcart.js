import {FlatList, Pressable, StyleSheet, Text, View} from "react-native";
//import cart from "../data/cart";
import CartListItem from "../components/CartListItem";
import {useSelector} from "react-redux";
import {selectDeliveryPrice, selectSubtotal, selectTotal} from "../store/cartSlice";
//import {cartSlice} from "../store/cartSlice";
const Shoppingcart = () => {
    const cartItems =
        useSelector((state) => state.cart.items);

    const ShoppingCartTotals = () => {
        const subtotal = useSelector(selectSubtotal);
        const deliveryFee = useSelector(selectDeliveryPrice);
        const total = useSelector(selectTotal);


        return(
        <View style={styles.totalContainer}>
            <View style={styles.row} >
                <Text style={styles.Text}>SubTotal</Text>
                <Text style={styles.Text}> ₹ {subtotal}</Text>
            </View>
            <View style={styles.row} >
                <Text style={styles.Text}>Delivery</Text>
                <Text style={styles.Text}> ₹ {deliveryFee}</Text>
            </View>
            <View style={styles.row} >
                <Text style={styles.TextBold}>Total</Text>
                <Text style={styles.TextBold}> ₹ {total}</Text>
            </View>
        </View>
    )};

    return(
        <>
        <FlatList
            data={cartItems}
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