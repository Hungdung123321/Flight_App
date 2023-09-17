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
export const InterTextWeight400 = styled(Text, 'font-Inter[Inter-Regular] text-black');
export const InterTextWeight500 = styled(Text, 'font-Inter[Inter-Medium] text-black');
export const InterTextWeight600 = styled(Text, 'font-Inter[Inter-SemiBold] text-black');
export const InterTextWeight700 = styled(Text, 'font-Inter[Inter-Bold] text-black');


