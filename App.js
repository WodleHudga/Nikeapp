import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ProductScreen from "./src/Screens/ProductScreen";
import ProductDetailScreen from "./src/Screens/ProductDetailScreen";
import shoppingcart from "./src/Screens/shoppingcart";
import Shoppingcart from "./src/Screens/shoppingcart";

export default function App() {
  return (
    <View style={styles.container}>
        {/*<ProductScreen />*/}
      {/*<ProductDetailScreen />*/}
      <Shoppingcart />
        <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  }
});
