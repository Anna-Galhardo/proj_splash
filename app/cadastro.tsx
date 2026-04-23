import { View, Text, TextInput, Image } from "react-native";
import { Link } from "expo-router";
import styles from "./css/style";

export default function Cadastro() {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.img} source={require("../assets/image.png")}></Image>
      </View>

      <Text>CADASTRO:</Text>

      <Text>NOME:</Text>
      <TextInput placeholder="Digite seu nome" style={styles.input} />

      <Text>CPF:</Text>
      <TextInput placeholder="Digite seu CPF" style={styles.input} />

      <Text>SENHA:</Text>
      <TextInput placeholder="Crie uma senha" style={styles.input} />

      <View style={{ width: "100%" }}>
        <Link href="/" style={styles.entrar}>CADASTRAR</Link>
      </View>

    </View>
  );
}