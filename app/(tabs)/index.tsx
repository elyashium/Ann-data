import { Text, StyleSheet, ImageBackground, View, ScrollView, Pressable } from "react-native";

export default function index() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bg}
        source={require("./bg.png")}
        resizeMode="cover"
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.topHalf}>
            <Text style={styles.welcomeText}>Welcome</Text>
          </View>

          <View style={styles.bottomHalf}>
            <View style={styles.boxContainer}>
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
                onPress={() => alert('Pressed Feature 4')}
              >
                <Text style={styles.boxText}>Best Practices</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
    opacity: 0.45,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  topHalf: {
    height: 450, // Fixed height for top section
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  bottomHalf: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    paddingTop: 20,
  },
  boxContainer: {
    padding: 10,
  },
  box: {
    padding: 15,
    margin: 10,
    borderRadius: 10,
    height: 200,
    justifyContent: 'center', // Center the text vertically
  },
  boxText: {
    fontSize: 18,
    textAlign: 'center',
    color: "#FFFFFF", // Fixed the color value
    fontWeight: '600',
  }
});