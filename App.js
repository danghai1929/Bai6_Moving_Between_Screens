import * as React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{margin: 40,}}>
        <Text style = {{fontWeight: 'bold', fontSize: 30, color: '#33CCFF'}}>Home Screen</Text>      
      </View>
      <View style = {{margin: 10, marginTop: 0,}}>
        <Button
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
      <View style = {{margin: 10,}}>
        <Button
          title="Register"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
      
    </View>
  );
}
function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', justifyContent: 'center', margin: 40,}}>
        <Text style = {{fontWeight: 'bold', fontSize: 30, color: '#33CCFF'}}>Register Screen</Text>      
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email..."
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password..."
          secureTextEntry={true}
        />
      </View>
    <TouchableOpacity style={styles.loginBtn}>
      <Text style={styles.loginText}>LOGIN</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
      <Text style={styles.button}>Forgot Password?</Text>     
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
      <Text style={styles.button}>Do not have an account? Register</Text>
    </TouchableOpacity>
  </View>
  );
}
function ForgotPasswordScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Forgot Password Screen</Text>
    </View>
  );
}
function RegisterScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Register Screen</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false,}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    backgroundColor: 'lightgray',
    borderRadius: 25,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    justifyContent: 'flex-start',
  },
 
  button: {
    marginTop: 30,
  },
 
  loginBtn: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#33CCFF",
  },
});