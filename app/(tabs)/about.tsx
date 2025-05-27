import React = require("react");
import { Text, View, StyleSheet } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre nós</Text>
      <Text style={styles.text}>O Sítio da Vó Afonsa é um pedaço de terra abençoado pela natureza, onde a tradição e o respeito pelo meio ambiente se encontram para criar produtos orgânicos de qualidade, com um sabor que remete às memórias mais puras da nossa história. Fundado em 1897, o sítio foi criado por Dona Afonsa, uma mulher visionária que acreditava no poder da agricultura sustentável e no cuidado com o que a terra oferece de melhor.</Text>
      <Text style={styles.text}>Há mais de 120 anos, seguimos sua sabedoria, cultivando os melhores produtos sem o uso de agrotóxicos ou fertilizantes artificiais. Nosso compromisso com a preservação do solo e a saúde dos nossos consumidores é o que nos motiva a oferecer alimentos frescos e cheios de sabor, exatamente como a Vó Afonso fazia na sua época.</Text>
      <Text style={styles.text}>O Sítio da Vó Afonsa é um lugar onde o tempo parece desacelerar, onde a simplicidade e a sabedoria de gerações se entrelaçam com a beleza imensurável da natureza. Desde sua fundação, em 1897, por Dona Afonsa, uma mulher que visionou um futuro de respeito e harmonia com o meio ambiente, o sítio tem sido um exemplo de como a agricultura sustentável pode não apenas produzir alimentos de qualidade, mas também preservar a saúde do solo e dos seres que dele dependem. Ao longo das décadas, mantivemos vivo o legado dessa mulher sábia, que acreditava firmemente que o cultivo da terra deveria ser feito com carinho e sem a intervenção de produtos químicos ou artificiais.
      O segredo para nossos produtos tão especiais é o cuidado e o respeito com a natureza. Aqui, cada plantação é tratada como um bem precioso, cultivada com o conhecimento de quem conhece profundamente o ritmo da terra e das estações do ano. As práticas que seguimos são resultado de anos de experiência, onde a sabedoria ancestral se une à inovação consciente, criando um ambiente onde a biodiversidade é preservada e o ciclo natural da vida se mantém intacto. Cada fruto colhido, cada planta cultivada carrega em si o carinho com que foi tratado e o zelo com que é preparado para chegar à mesa de nossos consumidores.
      A qualidade de nossos produtos não está apenas no sabor, mas na essência de cada um deles. Os tomates heirloom, por exemplo, têm um sabor inconfundível, uma explosão de frescor e um toque adocicado que remete aos tempos antigos, quando o cultivo era mais ligado à terra do que à indústria. Esses tomates, sem pressa para amadurecer, crescem com a paciência da natureza, absorvendo o sol e a energia que só uma terra bem cuidada pode oferecer. Da mesma forma, os morangos orgânicos são pequenos tesouros da natureza, com um doce sabor que parece capturar a verdadeira essência do campo, crescendo livres de substâncias artificiais, para garantir que cada mordida seja uma experiência única.
      As ervas aromáticas cultivadas em nosso sítio, como o alecrim, o manjericão, a sálvia e o tomilho, são cuidadas com atenção e com o compromisso de proporcionar sabores e aromas que elevam qualquer prato. Suas folhas frescas, colhidas na hora certa, são verdadeiramente o reflexo da harmonia entre o homem e a terra. O cuidado na colheita e no manuseio dessas ervas garante que elas mantenham suas propriedades intactas, oferecendo um sabor autenticamente natural.
      Além disso, um dos maiores orgulhos do Sítio da Vó Afonsa é o mel de abelhas nativas. Extraído diretamente de nossas colmeias, esse mel é puro, sem aditivos ou processos artificiais. Seu sabor é delicado e profundo, refletindo a diversidade floral do campo e a dedicação de quem cuida de cada detalhe do processo. A coleta do mel é feita de forma cuidadosa, respeitando as abelhas e o ambiente em que vivem, garantindo um produto de qualidade superior que traz um pedaço da natureza em cada gota.
      Com mais de 120 anos de história, o Sítio da Vó Afonsa continua a ser um lugar de aprendizado, preservação e amor pela terra. Cada produto que oferecemos carrega o legado de Dona Afonsa, que soube ver o futuro sem abrir mão das tradições que tornam a agricultura uma arte. Aqui, acreditamos que a verdadeira riqueza está em respeitar o que a natureza tem a oferecer e em compartilhar com o mundo os frutos desse cuidado constante. Ao consumir nossos produtos, você não está apenas saboreando o que há de melhor da natureza, mas também apoiando uma forma de vida que valoriza a sustentabilidade, o respeito ao meio ambiente e o compromisso com a saúde de todos.</Text>
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
    fontSize: 17
    
  },
})