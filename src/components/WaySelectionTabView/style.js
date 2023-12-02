import { Dimensions, StyleSheet } from "react-native";
import { scale } from "../../constants/scale";

const styles = StyleSheet.create({
    initialLayout: {
        width: Dimensions.get('window').width
    },
    tabviewStyle: {
        height: scale(460),
    },
    sceneContainerStyle: {
        padding: 24,
        backgroundColor: 'white',
        borderRadius: 8,
    }
})

export default styles;