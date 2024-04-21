import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, Button } from "react-native";
import { StackTypes } from "../../routes/stack";
import { Layout } from "../../Layouts/Layout";

const Home = () => {
  const navigation = useNavigation<StackTypes>();

  return (
    <Layout>
      <View>
        <Text
          style={{
            fontSize: 40,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Bem vindo
        </Text>
      </View>
    </Layout>
  );
};

export default Home;
