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
    backgroundColor: "#3f51b5",
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
   dashboardContainer: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingBottom: 30,
  },
  card: {
    width: 350,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  cardDescribe: {
    marginTop: 10,
    color: "#555",
  },

  likeButton: {
    marginTop: 15,
    backgroundColor: "#3f51b5",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  likeText: {
    color: "#fff",
    fontWeight: "bold",
  },
  cardImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  
  buttonText: {
    color: "#fff" ,
    fontSize: 16,
    fontWeight: "bold",
  },

  botao: {
    width: "100%",
    marginTop: 20,
    alignSelf: "stretch",
  },


});

export default styles;
