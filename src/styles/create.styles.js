import { StyleSheet } from "react-native";
import { COLORS, SPACING } from '../styles/Theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.xl,
    gap: 10,
    backgroundColor: COLORS.background
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    borderRadius: SPACING.md
  }
});