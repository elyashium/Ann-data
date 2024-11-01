import { Text, StyleSheet, ImageBackground, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";


export default function index() {
  return (<>
    <View style={styles.container}>

      <ImageBackground

        style={styles.bg}
        source={require("./bg.png")}
        resizeMode="cover"

      >

      </ImageBackground>

    </View>
  </>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: "column",

  },
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
    opacity: 0.35,
    justifyContent: 'center',


  }

})
