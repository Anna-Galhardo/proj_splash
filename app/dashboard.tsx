import {  Text, ScrollView } from "react-native";
import styles from "./css/style";
import HeaderImage from "./components/HeaderImage";
import CourseCard from "./components/CouseCard";
import ButtonArea from "./components/ButtonArea";

export default function DashBoard() {
  return (
    <ScrollView contentContainerStyle={styles.dashboardContainer}>
      <HeaderImage />

      <Text style={styles.titulo}>
        Cursos em Destaque
      </Text>

      <CourseCard
        title="EXCEL BÁSICO"
        describe="Excel"
        likes={12}
        image={require("../assets/excel.jpg")}
      />

      <CourseCard
        title="DESCARBONIZAÇÃO"
        describe="Descarbonização"
        likes={20}
        image={require("../assets/DESCARBONO.png")}
      />

      <CourseCard
        title="INTELIGÊNCIA ARTIFICIAL"
        describe="Inteligência Artificial"
        likes={8}
        image={require("../assets/IA.jpg")}
      />
      <ButtonArea text="Sair" href="/login" />
    </ScrollView>
  );
}