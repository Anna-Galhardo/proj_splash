import { View, Text, TextInput, Image } from "react-native";
import { Link } from "expo-router";
import styles from "./css/style";

export default function Esqueci() {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.img} source={require("../assets/image.png")}></Image>
      </View>

      <Text>RECUPERAR SENHA</Text>

      <Text>CPF:</Text>
      <TextInput placeholder="Digite seu CPF" style={styles.input} />

      <View style={{ width: "100%" }}>
        <Link href="/" style={styles.entrar}>ENVIAR</Link>
      </View>

    </View>
  );
}