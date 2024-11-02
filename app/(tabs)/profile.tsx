import { StyleSheet, Text, View } from "react-native";



export default function profile() {
  return (


    <View style={styles.container}>


      {/* for username top half*/}

      <View style={styles.upperhalf}>

        <View style={styles.username}>

          <View>
            {/* for username photo */}
          </View>
          <Text> User Name </Text>
          
        </View>

      </View>



      {/* lower half */}
      <View>
        <View>
          {/* the details box */}
        </View>
      </View>



    </View>
  )
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },

  upperhalf: {
    backgroundColor: '#4CAF50',
    height: 200
  },
  username :{

  }

})
