import { Text, StyleSheet, ImageBackground, View, ScrollView, Pressable } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bg}
        source={require("./bg.png")}
        resizeMode="cover"
      >

        <View style={styles.topHalf}>
          <Text >Welcome</Text>
        </View>

        <View style={styles.bottomHalf}>

          <View >
            <Pressable
              style={[styles.box, { backgroundColor: '#C9791C' }]}
              onPress={() => alert('Pressed Feature 1')}
            >
              <Text style={styles.boxText}>Live-Mandi prices</Text>
            </Pressable>


            <Pressable
              style={[styles.box, { backgroundColor: "#2A3770" }]}
              onPress={() => alert('Pressed Feature 2')}
            >
              <Text style={styles.boxText}>Crop Disease Protection</Text>
            </Pressable>

            <Pressable
              style={[styles.box, { backgroundColor: '#C9B51C' }]}
              onPress={() => alert('Pressed Feature 3')}
            >
              <Text style={styles.boxText}>Weather Forecast</Text>
            </Pressable>

            <Pressable
              style={[styles.box, { backgroundColor: '#F6787A' }]}
              onPress={() => alert('Pressed Feature 3')}
            >
              <Text style={styles.boxText}>Best Practices</Text>
            </Pressable>


          </View>
        </View>

      </ImageBackground>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#FFFFFF'
  },
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
    opacity: 0.35,
  },

  topHalf: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomHalf: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },

  scrollContent: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  box: {

    padding: 20,
    margin: 10,
    borderRadius: 10,
    height: 200,


  },
  boxText: {
    fontSize: 18,
    textAlign: 'center',
    color: "#FFFFF"
  }
});