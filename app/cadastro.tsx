import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput, Image } from "react-native";
import styles from "./css/style";
import { Link } from "expo-router";
import Formfield from "./components/FormField";

export default function Cadastro() {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.img} source={require("../assets/image.png")}></Image>
      </View>

  

     <Formfield
        label="Nome"
        placeholder="Insira o seu nome"
        secure={false}
      />

        <Formfield
          label="Email"
          placeholder="Insira o email"
          secure={false}
        />
         <Formfield
            label="Senha"
            placeholder="Insira sua senha"
            secure={true}
          />

      <View style={{ width: "100%" }}>
        <Link href="/" style={styles.entrar}>CADASTRAR</Link>
      </View>

    </View>
  );
}