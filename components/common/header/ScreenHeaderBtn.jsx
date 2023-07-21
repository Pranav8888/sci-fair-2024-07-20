import React from 'react'
import { TouchableOpacity, Image, Text } from 'react-native'
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";
import { Stack, useRouter } from 'expo-router';

const ScreenHeaderBtn = ({ iconPath, iconUrl, dimension }) => {
  const router = useRouter();
  return (
      <TouchableOpacity onPress={
        iconPath != null ? () => {router.push(iconPath)} : () => {}
      }>
        <Image 
          source={iconUrl} 
          resizeMode="cover"
          style={styles.btnImg(dimension)}
        />
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
});

export default ScreenHeaderBtn;