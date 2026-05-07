import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput, Image } from "react-native";
import { Link } from "expo-router";
import styles from "./css/style";
import Formfield from "./components/FormField";

export default function Esqueci() {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.img} source={require("../assets/image.png")}></Image>
      </View>

  

       <Formfield
                label="Email"
                placeholder="Insira o email"
                secure={false}
         />

        <View style={styles.contBaixo}>
          <View style={styles.baixo}>
            <Link href={"/login"} style={styles.direita}>
              Voltar para login
            </Link>
          </View>
        </View>

      <View style={{ width: "100%" }}>
        <Link href="/" style={styles.entrar}>ENVIAR</Link>
      </View>

    </View>
  );
}