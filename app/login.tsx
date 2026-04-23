import { StatusBar } from 'expo-status-bar';
import { Text,TextInput, View , Image, } from 'react-native';
import styles from './css/style';
import { Link } from 'expo-router';


export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.img} source={require("../assets/image.png")}></Image>
      </View>
      
      <View>
      <Text>LOGIN:</Text>
      <TextInput placeholder= "Insira seu CPF" style={styles.input}/>
      <Text>SENHA:</Text>
      <TextInput placeholder= "Insira sua senha" style={styles.input}/>
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