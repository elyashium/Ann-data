import {
  Text, StyleSheet, ImageBackground, View, ScrollView, Pressable, Image,
} from "react-native";



const WeatherWidget = () => {
  return (
    <View style={styles.weatherContainer}>
      <View style={styles.weatherWidget}>
        <Text style={styles.weatherText}>28°C</Text>
        <Text style={styles.weatherDivider}>|</Text>
        <Text style={styles.weatherText}>Sunny</Text>
      </View>
    </View>
  );
};

export default function index() {


  return (

    <View style={styles.container}>
      <ImageBackground
        style={styles.bg}
        source={require("./images/bg.png")}
        resizeMode="cover"
      >

    <WeatherWidget />

        <ScrollView contentContainerStyle={styles.scrollContainer}>

          {/* {top half} */}
          <View style={styles.topHalf}>
            <Image
              source={require("./images/mic.png")}
              resizeMode="cover"
              style={styles.mic}
            >


            </Image>
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

  },


  // Weather Widget Styles
  weatherContainer: {
    position: 'absolute',
    top: 40, // Adjust based on your status bar height
    width: '100%',
    alignItems: 'center',
    zIndex: 1000,
  },
  weatherWidget: {
    backgroundColor: '#013B04',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    minWidth: 320,
    maxWidth: 400,
  },
  weatherText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  weatherDivider: {
    color: '#FFFFFF',
    marginHorizontal: 10,
    opacity: 0.6,
  },

  scrollContainer: {
    flexGrow: 1,
  },
  mic: {

    width: 300,
    height: 300,
    top: 40,
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