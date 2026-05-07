import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  img:{ 
    marginTop:120,
    width:350,
    height:50,
    marginBottom:70,
    alignSelf: "center",
  },

  input:{
    borderColor: '#ccc',
    borderWidth:1,
    width:"100%",
    padding:15,
    marginBottom:15,
    fontSize: 14,
    borderRadius:5,
  },

  canto:{
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 20,
  },

  link: {
    color: "#9c27b0",
    fontSize: 13,
    marginBottom: 5,
  },

  entrar:{
    backgroundColor: "#3f51b5",
    padding: 15,
    borderRadius: 8,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
  },

  titulo:{
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  esquerda: {
    width: 350,
    textAlign: "left",
  },
  direita: {
    width: 350,
    textAlign: "right",
    fontWeight:'bold'
  },
   btn: {
    width: 200,
    height: 50,
    backgroundColor: "#dd0000",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
    contBaixo: {
    width: 350,
    height: 40,
    justifyContent: "flex-end",
    marginTop: 10,
  },
    baixo: {
    flexDirection: "column",
    alignItems: "flex-end",
  },

});

export default styles;
