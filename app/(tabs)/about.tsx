import React = require("react");
import { Text, View, StyleSheet } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre nós</Text>
      <Text style={styles.text}>O Sítio Urbano nasceu do encontro harmonioso entre a natureza e a cidade, como uma resposta à necessidade de equilíbrio em meio ao ritmo acelerado da vida moderna. Somos um espaço cuidadosamente pensado para promover a reconexão com o verde, mesmo no coração do ambiente urbano — um convite para respirar, pausar e se inspirar na simplicidade da terra. Mais do que um refúgio sustentável, somos um convite à transformação: um lugar onde o cultivo de alimentos orgânicos, o bem-estar físico e emocional e os laços da comunidade se entrelaçam naturalmente. </Text>
      <Text style={styles.text}>Acreditamos que é possível viver de forma mais equilibrada, mesmo em meio ao concreto. Por isso, criamos um ambiente onde hortas urbanas, práticas ecológicas e vivências coletivas ganham vida. Nosso propósito é inspirar uma nova forma de habitar a cidade: mais consciente, mais verde e mais humana.</Text>
      <Text style={styles.text}>No Sítio Urbano, você encontra desde oficinas de agroecologia, compostagem e jardinagem, até feiras colaborativas e espaços de convivência pensados para fortalecer laços entre pessoas e a terra. Aqui, cada canto é pensado para promover educação ambiental, autonomia alimentar e práticas sustentáveis acessíveis a todos.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#EDF2C9',
  },
  title: {
    color: '#DC5F87',
    fontWeight: 'bold',
    fontSize: 30
  },
  text: {
    color: '#2B282B',
    textAlign: 'justify',
    lineHeight: 28,
    fontSize: 17,
    margin: 17,
  },
})