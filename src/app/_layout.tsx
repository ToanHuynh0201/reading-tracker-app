import { Stack } from "expo-router";
import "react-native-reanimated";
export const unstable_settings = {
	anchor: "(tabs)",
};

export default function RootLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
				animation: "fade",
				animationDuration: 300,
			}}>
			<Stack.Screen name="index" />
			<Stack.Screen name="(tabs)" />
		</Stack>
	);
}
