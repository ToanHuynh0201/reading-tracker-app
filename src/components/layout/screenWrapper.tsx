import { useTheme } from "@/src/hooks/useTheme";
import { ScreenWrapperProps } from "@/src/types/layoutComponents";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ScreenWrapper = ({
	edges = ["top", "bottom"],
	backgroundColor: background,
	style,
	children,
}: ScreenWrapperProps) => {
	const { theme } = useTheme();
	const backgroundColor = background ? background : theme.background;
	return (
		<SafeAreaView
			style={[styles.container, style, { backgroundColor }]}
			edges={edges}>
			{children}
		</SafeAreaView>
	);
};

export default ScreenWrapper;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
