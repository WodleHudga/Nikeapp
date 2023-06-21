import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import * as React from 'react';
import {FontAwesome5} from "@expo/vector-icons";
import ProductScreen from "./Screens/ProductScreen";
import ProductDetailScreen from "./Screens/ProductDetailScreen";
import Shoppingcart from "./Screens/Shoppingcart";
import {Pressable, Text} from "react-native";


const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
     <NavigationContainer>
         <Stack.Navigator screenOptions={{contentStyle: {backgroundColor: 'white'}}}>
             <Stack.Screen name="Products"
                           component={ProductScreen}
                           options={(navigation) => (
                               {headerRight: () => <Pressable onPress={() => navigation.navigation.navigate('Cart')}
                                                              style={{flexDirection: 'row'}}>
                                   <FontAwesome5
                                       name="shopping-cart"
                                       size={18} color="grey" />
                                   <Text
                                       style={{marginLeft: 5, fontWeight: '500'}}>
                                       1
                                   </Text>
                               </Pressable>

                           })}
             />
             <Stack.Screen name="Product Details"
                           component={ProductDetailScreen}
                           options={{
                               presentation: 'modal'
                           }}
             />
             <Stack.Screen name="Cart" component={Shoppingcart} />

         </Stack.Navigator>
     </NavigationContainer>

    );
}
    


export default Navigation;