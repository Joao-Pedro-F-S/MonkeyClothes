import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export function Voltar() {
    return (
        <View style = {styles.view}>
            <Pressable onPress={ router.back }>
                <Text style = {styles.text}> &lt; voltar </Text>
            </Pressable>
        </View>
    )
}