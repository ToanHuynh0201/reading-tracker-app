import Typo from "@/src/components/common/typo";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<Typo>Hello</Typo>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
