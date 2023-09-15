import { styled } from "nativewind";
import { Text, View, TouchableOpacity, Image, TextInput, FlatList, ScrollView } from "react-native";
import styles from "./style";

// React core styled
export const StyledText = styled(Text)
export const StyledView = styled(View)
export const StyledButton = styled(TouchableOpacity)
export const StyledImage = styled(Image)
export const StyledTextInput = styled(TextInput)
export const StyledFlatList = styled(FlatList)
export const StyledScrollView = styled(ScrollView)

// fonts
export const SnesTitleText = styled(Text, "font-SnesItalic text-3xl text-white")
export const GoldmanTitleText = styled(Text, "font-GoldmanBold text-4xl text-white")
export const InriaSmallTitleText = styled(Text, "font-InriaSans[InriaSans-Bold] text-lg text-white")
export const InriaSmallText = styled(Text, "font-InriaSans[InriaSans-Light] text-base text-white")


