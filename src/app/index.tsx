import { useRouter } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSharedValue, withTiming } from "react-native-reanimated";

export default function HomeScreen() {
	const containerOpacity = useSharedValue(1);
	const router = useRouter();
	useEffect(() => {
		const navigationTimer = setTimeout(() => {
			containerOpacity.value = withTiming(0, { duration: 1000 });
			setTimeout(() => {
				router.replace("/(tabs)");
			}, 300);
		}, 4000);

		return () => clearTimeout(navigationTimer);
	});
	return (
		<View>
			<Text>Hello Home Screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
