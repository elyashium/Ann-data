import { Text, StyleSheet, ImageBackground } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";


export default function index() {
  return (
    <ImageBackground
      style={styles.bg}
      source={require("../assets/images/bg.svg'")}
      resizeMode="cover"
    >

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',

  }
})
