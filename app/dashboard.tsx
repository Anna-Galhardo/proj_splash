import {  Text, ScrollView } from "react-native";
import { useState } from "react";
import styles from "./css/style";
import HeaderImage from "./components/HeaderImage";
import CourseCard from "./components/CouseCard";
import ButtonArea from "./components/ButtonArea";
import CourseModal from "./components/CourseModal";

export default function DashBoard() {
  // vamos controlar abertura do balão 
  const [modalVisible, setModalVisible] = useState(false);

  // guardar as informações do curso selecionado 
  const [selectedCourse, setSelectedCourse] = useState({
    title: "",
    description: "",
    professor: "",
    hours: "",
    image: null //para iniciar vazio 
  });

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
      <CourseModal

        //função que vai cuidar da visibilidade
        visible={modalVisible}
        // função para cuidar de quando vai fechar 
        onClose={function () {
          setModalVisible(false);
        }}
        //e as informações que vão ser passada para o balão 
        title={selectedCourse.title}
        description={selectedCourse.description}
        professor={selectedCourse.professor}
        hours={selectedCourse.hours}
        image={selectedCourse.image}
      />
      <ButtonArea text="Sair" href="/login" />
    </ScrollView>
  );
}