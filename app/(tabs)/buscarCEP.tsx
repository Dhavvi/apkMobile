import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useBuscaCep } from '@/app/hooks/useBuscaCep';
import React from "react";

export default function BuscaCEP() {
  const { cep, setCep, endereco, buscarCEP } = useBuscaCep();

  return (
    <View style={styles.container}>
      <Text>Consulte seu CEP</Text>

      <TextInput
        style={styles.textinput}
        value={cep}
        onChangeText={setCep}
        placeholder="Digite o CEP"
        keyboardType="numeric"
      />

      <Text>{cep}</Text>

      <Button
        title="Buscar"
        onPress={buscarCEP}
        color={'#56B521'}
      />

      {endereco.logradouro !== '' && (
        <View style={styles.result}>
          <Text>Logradouro: {endereco.logradouro}</Text>
          <Text>Bairro: {endereco.bairro}</Text>
          <Text>Cidade: {endereco.localidade}</Text>
          <Text>Estado: {endereco.uf}</Text>
        </View>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDF2C9',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        marginBottom: 20,
        color: '#DC5F87',
        fontWeight: 'bold',
        fontSize: 30,
    },
    textinput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        width: '100%',
        marginBottom: 10,
    },
    result: {
        marginTop: 20,
        alignItems: 'flex-start',
        width: '100%',
        color: 'black',
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#2B282B',
    },
});
