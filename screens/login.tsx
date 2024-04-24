// app/(auth)/login.js

import React, { useState } from "react";
import { Alert, StyleSheet, TextInput, View, Button, Text } from "react-native";
import { supabase } from "../utils/supabase";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation';

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Login'>;

export default function AuthPage() {
  const navigation = useNavigation<OverviewScreenNavigationProps>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert("Sign In Error");
      setLoading(false);
    }
    const user = supabase.auth.getUser();
    navigation.navigate('Welcome', {user})
  }

  /*async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert("Sign Up Error", error.message);
    setLoading(false);
  }*/

  return (
    <View style={styles.container}>

      <View style={[styles.verticallySpaced, styles.mt20, styles.containerLogo]}>
        <Image source={require('../assets/Logo-Light.png')} style={styles.logo} resizeMode="contain"/>
      </View>

      <View style={[styles.verticallySpaced, styles.mt20]}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="Email"
          autoCapitalize={"none"}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="senha"
          autoCapitalize={"none"}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <TouchableOpacity
          disabled={loading}
          onPress={() => signInWithEmail()}
          style={styles.roundGreenButton}
        >
          <Text style={styles.greenButtonText}>Logar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  containerLogo:{
    justifyContent:'center',
    alignContent: 'center',
    alignItems:'center',
    height: 120,
  },
  logo:{
    width:'100%'
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
  },
  roundGreenButton:{
    backgroundColor: "green",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 8,
  },
  buttonContainer: {
    backgroundColor: "#000968",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 8,
  },
  greenButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  textInput: {
    borderColor: "#000968",
    borderRadius: 4,
    borderStyle: "solid",
    borderWidth: 1,
    padding: 12,
    margin: 8,
  },
});