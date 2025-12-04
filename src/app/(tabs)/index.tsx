import Typo from "@/src/components/common/typo";
import ScreenWrapper from "@/src/components/layout/screenWrapper";
import { useTheme } from "@/src/hooks/useTheme";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
	const { theme, themeMode, toggleTheme } = useTheme();
	return (
		<ScreenWrapper>
			<View style={styles.container}>
				<Typo color={theme.textSecondary}>Hello</Typo>
			</View>
		</ScreenWrapper>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
