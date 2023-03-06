import React, { useState } from "react";
import styles from './styles';
import { TouchableOpacity, Text, View, ScrollView, TextInput, Alert } from "react-native";

const App = () => {

  const [nomeCliente, setNomeCliente] = useState('');

  const cadastrarCliente = () => {
    Alert.alert(
      'Titulo da Mensagem', 'Valor capturado: ' + nomeCliente 
    );
  };

  return (
    <View style={styles.view}>

      <TextInput
        style={styles.input}
        value={nomeCliente}
        onChangeText={setNomeCliente}
        placeholder="Digite seu nome"
      
      />

      <TouchableOpacity style={styles.button} onPress={cadastrarCliente}>
        <Text style={styles.buttonText}>Pressione-me</Text>
      </TouchableOpacity>

    </View>
  );

};

export default App;
