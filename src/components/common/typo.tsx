import { TypoProps } from "@/src/types/commonComponents";
import React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";
//  fontSize?: number;
// 	color?: string;
// 	fontWeight: TextStyle["fontWeight"];
// 	textProps?: TextProps;
// 	style?: TextStyle;
// 	children: ReactNode;
const Typo = ({
	fontSize,
	color,
	fontWeight = 400,
	style,
	children,
	textProps = {},
}: TypoProps) => {
	const textStyle: TextStyle = {
		fontSize: fontSize ? fontSize : 16,
		color,
		fontWeight,
	};
	return (
		<Text
			style={[style, textStyle]}
			{...textProps}>
			{children}
		</Text>
	);
};

export default Typo;

const styles = StyleSheet.create({});
