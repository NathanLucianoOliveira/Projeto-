import { useState } from "react";
import {
  Alert,
  Button,
  Image,
  Platform,
  StyleSheet,
  TextInput,
  View,
  Text,
  ToastAndroid,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { gerarGrupo } from "../../../mocks";

export function EditarGrupo() {
  const grupo = gerarGrupo();
  const [groupName, setGroupName] = useState(grupo.nome);
  const [groupDescription, setGroupDescription] = useState(grupo.descricao);
  const [groupImage, setGroupImage] = useState(grupo.imagem);
  const [quantidadeMaxima, setQuantidadeMaxima] = useState(
    grupo.quantidadeMaxima
  );
  const [dataRevelacao, setDataRevelacao] = useState(grupo.dataRevelacao);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setGroupImage(result.assets[0].uri);
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || dataRevelacao;
    setShowDatePicker(Platform.OS === "ios");
    setDataRevelacao(currentDate);
  };

  const showDatePickerMode = () => {
    setShowDatePicker(true);
  };

  const createGroup = () => {
    ToastAndroid.show("Grupo editado com sucesso!", ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do Grupo"
        onChangeText={setGroupName}
        value={groupName}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição do Grupo"
        onChangeText={setGroupDescription}
        value={groupDescription}
      />
      <Button title="Escolher Imagem" onPress={pickImage} />
      {groupImage && (
        <Image source={{ uri: groupImage }} style={styles.image} />
      )}
      <TextInput
        style={styles.input}
        placeholder="Quantidade Máxima"
        onChangeText={(e) => setQuantidadeMaxima(e as number)}
        value={quantidadeMaxima as unknown as string}
        keyboardType="numeric"
      />
      <Button title="Escolher Data de Revelação" onPress={showDatePickerMode} />
      {showDatePicker && (
        <DateTimePicker
          value={dataRevelacao}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
      <Text style={styles.dateText}>
        Data de Revelação: {dataRevelacao.toLocaleDateString()}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Editar Grupo" onPress={createGroup} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderRadius: 20, // Arredonda os inputs
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10, // Adiciona padding horizontal para melhorar a aparência
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    alignSelf: "center", // Centraliza a imagem
  },
  dateText: {
    marginBottom: 10,
    textAlign: "center", // Centraliza o texto da data
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    marginRight: 10,
  },
});
