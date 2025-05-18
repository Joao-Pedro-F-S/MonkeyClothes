import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { BellRinging, Bookmark, MagnifyingGlass } from "phosphor-react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
          />
          <Text style={styles.headerLeftText}>Monkeys clothes</Text>
        </View>
        <View style={styles.headerRight}>
          <View style={styles.iconContainer}>
            <BellRinging size={30} color="#007AFF" weight="duotone" />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>0</Text>
            </View>
          </View>

          <View style={styles.iconContainer}>
            <Bookmark size={30} color="#007AFF" weight="duotone" />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>0</Text>
            </View>
          </View>
        </View>
      </View>

      <Text style={styles.userName}>Olá, Rodrigo Faro</Text>

      <View style={styles.inputContainer}>
        <MagnifyingGlass size={28} color="#757575" weight="duotone" />
        <TextInput
          placeholder="O que você está procurando?"
          placeholderTextColor="#757575"
          style={styles.input}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFEFE",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  headerLeftText: {
    fontSize: 18,
    marginLeft: 10,
    color: "#333",
    fontWeight: "bold",
  },
  headerRight: {
    flexDirection: "row",
  },
  iconContainer: {
    position: "relative",
    marginLeft: 15,
  },
  badge: {
    position: "absolute",
    top: -6,
    right: -6,
    backgroundColor: "red",
    borderRadius: 10,
    minWidth: 16,
    height: 16,
    paddingHorizontal: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  userName: {
    paddingTop: 30,
    paddingBottom: 30,
    color: "#333",
    fontSize: 25,
    fontWeight: "800",
    textDecorationLine: "underline"
  },
  inputContainer: {
    width: "100%",
    height: 56,
    backgroundColor: "#F0F0F0",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
});
