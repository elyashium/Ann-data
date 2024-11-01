import { Text, StyleSheet, ImageBackground, View, ScrollView, Pressable, Image,  Animated,
  TouchableWithoutFeedback  } from "react-native";



  import React, { useRef, useState } from 'react';

  const WeatherWidget = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const expandAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(1)).current;
  
    const handlePress = () => {
      // Toggle expanded state
      setIsExpanded(!isExpanded);
  
      // Animate expansion
      Animated.parallel([
        Animated.spring(expandAnim, {
          toValue: isExpanded ? 0 : 1,
          useNativeDriver: false,
          tension: 40,
          friction: 7
        }),
        Animated.sequence([
          Animated.timing(scaleAnim, {
            toValue: 0.95,
            duration: 100,
            useNativeDriver: true
          }),
          Animated.spring(scaleAnim, {
            toValue: 1,
            tension: 40,
            friction: 7,
            useNativeDriver: true
          })
        ])
      ]).start();
    };
  
    // Interpolate values for animations
    const widthInterpolation = expandAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['45%', '85%']
    });
  
    const heightInterpolation = expandAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [45, 120]
    });
  
    return (
      <View style={styles.weatherContainer}>
        <TouchableWithoutFeedback onPress={handlePress}>
          <Animated.View style={[
            styles.weatherWidget,
            {
              width: widthInterpolation,
              height: heightInterpolation,
              transform: [{ scale: scaleAnim }]
            }
          ]}>
            {/* Compact View */}
            <Animated.View style={[
              styles.compactContent,
              { opacity: expandAnim.interpolate({
                inputRange: [0, 0.5],
                outputRange: [1, 0]
              })}
            ]}>
              <Text style={styles.weatherText}>28°C</Text>
              <Text style={styles.weatherDivider}>|</Text>
              <Text style={styles.weatherText}>Sunny</Text>
            </Animated.View>
  
            {/* Expanded View */}
            <Animated.View style={[
              styles.expandedContent,
              { 
                opacity: expandAnim,
                display: expandAnim.interpolate({
                  inputRange: [0, 0.1],
                  outputRange: ['none', 'flex']
                })
              }
            ]}>
              <Text style={styles.expandedTemp}>28°C</Text>
              <Text style={styles.expandedDesc}>Sunny</Text>
              <View style={styles.extraInfo}>
                <Text style={styles.extraInfoText}>Humidity: 65%</Text>
                <Text style={styles.extraInfoText}>Wind: 12 km/h</Text>
              </View>
            </Animated.View>
          </Animated.View>
        </TouchableWithoutFeedback>
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
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 150,
    maxWidth: 200,
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


  compactContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
  },
  expandedContent: {
    padding: 15,
    alignItems: 'center',
  },

  expandedTemp: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  expandedDesc: {
    color: '#FFFFFF',
    fontSize: 18,
    opacity: 0.9,
    marginBottom: 10,
  },

  extraInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  extraInfoText: {
    color: '#FFFFFF',
    fontSize: 14,
    opacity: 0.8,
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