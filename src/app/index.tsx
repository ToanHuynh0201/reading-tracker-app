import { useRouter } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
	const router = useRouter();
	useEffect(() => {
		const navigationTimer = setTimeout(() => {
			setTimeout(() => {
				router.replace("/(tabs)");
			}, 300);
		}, 4000);

		return () => clearTimeout(navigationTimer);
	});
	return (
		<View>
			<Text>Hello Splash Screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
