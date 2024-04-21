import { StyleSheet, Text, ToastAndroid, View } from "react-native";
import { Layout } from "../../Layouts/Layout";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes/stack";
import { FlatList } from "react-native-gesture-handler";
import { IConvite, convites } from "../../../mocks";

export function Convite() {
  const navigation = useNavigation<StackTypes>();


  function criarConvite() {
    ToastAndroid.show("Convite criado com sucesso!", ToastAndroid.SHORT);
  }

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10,
        }}
      >
        <Text>Convites</Text>
        <Text onPress={() => criarConvite()}>Novo</Text>
      </View>
      <FlatList
        data={convites()}
        renderItem={({ item }) => <Card convite={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export const Card = ({ convite }: { convite: IConvite }) => {
  return (
     <View style={styles.card}>
       <View style={styles.contentContainer}>
         <Text style={styles.title}>Código:</Text>
         <Text style={styles.code}>{convite.codigo}</Text>
       </View>
     </View>
  );
 };
 
 const styles = StyleSheet.create({
  card: {
     backgroundColor: "#FFF",
     borderRadius: 10,
     padding: 10,
     marginVertical: 10,
     shadowColor: "#000",
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.25,
     shadowRadius: 3.84,
     elevation: 5,
     width: "100%",
  },
  contentContainer: {
     flexDirection: "row",
     justifyContent: "space-between",
     alignItems: "center",
  },
  title: {
     fontSize: 18,
     fontWeight: "bold",
  },
  code: {
     fontSize: 16,
     color: "#333",
  },
 });
