import { Image, Text, View } from "react-native";
import { styles } from "./styles";

type perfilProps = {
    nome: String,
}

export function Perfil(props: perfilProps) {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>Olá, {props.nome}</Text>
            <Image style={styles.image} source={require("@/assets/images/perfil.png")}></Image>
        </View>
    )    
}
