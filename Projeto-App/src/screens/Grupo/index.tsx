import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Layout } from "../../Layouts/Layout";
import { IGrupo, grupos } from "../../../mocks";

export function Grupo() {
  return (
    <Layout>
      <View>
        <Text>Grupos</Text>
        <FlatList
          data={grupos()}
          renderItem={({ item }) => <Card grupo={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </Layout>
  );
}
const Card = ({ grupo }: { grupo: IGrupo }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: grupo.imagem }} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.nameDescriptionContainer}>
          <Text style={styles.nome}>{grupo.nome}</Text>
          <Text style={styles.descricao}>{grupo.descricao}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.data}>
            Data de Revelação: {grupo.dataRevelacao.toLocaleDateString()}
          </Text>
          <Text style={styles.quantidade}>
            Quantidade Máxima: {grupo.quantidadeMaxima}
          </Text>
        </View>
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
    flexDirection: "row", // Alinha os itens horizontalmente
  },
  imageContainer: {
    width: 100, // Ajuste o tamanho conforme necessário
    marginRight: 10, // Adicionado para dar espaço entre a imagem e o texto
  },
  image: {
    width: 100, // Mesma largura do container
    height: 100, // Mesma altura do container
    borderRadius: 50, // Metade da largura/altura para formar um círculo
    resizeMode: "cover", // Redimensiona a imagem para cobrir completamente a área, mantendo a proporção
  },
  infoContainer: {
    flex: 1, // Permite que o container de informações ocupe o espaço restante
    width: "100%", // Necessário para o flex funcionar
  },
  nameDescriptionContainer: {
    flexDirection: "column", // Alinha o nome e a descrição horizontalmente
    justifyContent: "space-between", // Espaça o nome e a descrição igualmente
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
  },
  descricao: {
    fontSize: 14,
    flexWrap: "wrap", // Permite que o texto quebre em várias linhas
  },
  detailsContainer: {
    marginTop: 10, // Adiciona espaço entre o nome/descrição e os detalhes
  },
  data: {
    fontSize: 14,
  },
  quantidade: {
    fontSize: 14,
  },
});
