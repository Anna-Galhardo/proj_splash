import { StatusBar } from 'expo-status-bar';
import { Text,TextInput, View , Image, } from 'react-native';
import styles from './css/style';
import { Link } from 'expo-router';
import Formfield from "./components/FormField";


export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.img} source={require("../assets/image.png")}></Image>
      </View>
      
      <View>
       <Formfield
          label="Login"
          placeholder="Insira o email"
          secure={false}
        />
      <Formfield
          label="Senha"
          placeholder="Insira sua senha"
          secure={true}
        />
      <View style={styles.canto}>
        <Link href="/cadastro" style={styles.link}>cadastrar</Link>
        <Link href="/esqueciSenha" style={styles.link}>esqueci a senha</Link>
     </View>
      </View>

      <View style={{ width: "100%" }}>
      <Link href="/home" style={styles.entrar}>ENTRAR</Link>
      </View>
      
      
      <StatusBar style="auto" />
    </View>
  );
}