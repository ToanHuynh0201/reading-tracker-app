import Typo from "@/src/components/common/typo";
import ScreenWrapper from "@/src/components/layout/screenWrapper";
import { useTheme } from "@/src/hooks/useTheme";
import { StyleSheet, View } from "react-native";

export default function LibraryScreen() {
	const { theme } = useTheme();
	return (
		<ScreenWrapper>
			<View style={styles.container}>
				<Typo fontSize={28} fontWeight="700" color={theme.textPrimary}>
					📘 Library
				</Typo>
				<View style={styles.content}>
					<Typo color={theme.textSecondary}>
						Book List / Library section
					</Typo>
					<Typo color={theme.textSecondary}>
						• View all your books
					</Typo>
					<Typo color={theme.textSecondary}>
						• Filter and search books
					</Typo>
					<Typo color={theme.textSecondary}>
						• Add new books
					</Typo>
				</View>
			</View>
		</ScreenWrapper>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	content: {
		marginTop: 20,
		gap: 10,
	},
});
