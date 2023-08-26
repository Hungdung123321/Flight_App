import { styled } from "nativewind";
import { Text, View, TouchableOpacity, Image, TextInput, FlatList, ScrollView } from "react-native";

// React core styled
export const StyledText = styled(Text)
export const StyledView = styled(View)
export const StyledButton = styled(TouchableOpacity)
export const StyledImage = styled(Image)
export const StyledTextInput = styled(TextInput)
export const StyledFlatList = styled(FlatList)
export const StyledScrollView = styled(ScrollView)

// fonts
export const Heading3 = styled(Text, 'font-nomal text-xl')
export const Heading4 = styled(Text, 'font-medium text-xl')
export const Heading5 = styled(Text, 'font-medium text-base')
export const TextBodyMedium = styled(Text, 'font-medium text-sm')
export const TextBodySmall = styled(Text, 'font-normal text-base')