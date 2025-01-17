import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[100]
  },
  content: {
    gap: 10,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 10
  },
  indicator: {
    width: 80,
    height: 4,
    backgroundColor: colors.gray[300]
  },
  title: {
    color: colors.gray[600],
    fontSize: 16,
    fontFamily: fontFamily.regular,
    marginBottom: 4
  }
});