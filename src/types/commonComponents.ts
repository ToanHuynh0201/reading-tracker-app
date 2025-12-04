import { ReactNode } from "react";
import { TextProps, TextStyle } from "react-native";

export interface TypoProps {
	fontSize?: number;
	color?: string;
	fontWeight?: TextStyle["fontWeight"];
	textProps?: TextProps;
	style?: TextStyle;
	children: ReactNode;
}
