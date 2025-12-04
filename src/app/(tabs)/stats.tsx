import Typo from "@/src/components/common/typo";
import ScreenWrapper from "@/src/components/layout/screenWrapper";
import { useTheme } from "@/src/hooks/useTheme";
import { StyleSheet, View } from "react-native";

export default function StatsScreen() {
	const { theme } = useTheme();
	return (
		<ScreenWrapper>
			<View style={styles.container}>
				<Typo fontSize={28} fontWeight="700" color={theme.textPrimary}>
					📊 Statistics
				</Typo>
				<View style={styles.content}>
					<Typo color={theme.textSecondary}>
						Statistics / Insights section
					</Typo>
					<Typo color={theme.textSecondary}>
						• Reading progress and goals
					</Typo>
					<Typo color={theme.textSecondary}>
						• Charts and analytics
					</Typo>
					<Typo color={theme.textSecondary}>
						• Reading streaks
					</Typo>
					<Typo color={theme.textSecondary}>
						• Time spent reading
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
