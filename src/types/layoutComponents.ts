import { ReactNode } from "react";
import { ViewStyle } from "react-native";
import { Edge } from "react-native-safe-area-context";
export interface ScreenWrapperProps {
	style?: ViewStyle;
	edges?: Edge[];
	backgroundColor?: string;
	children: ReactNode;
}
