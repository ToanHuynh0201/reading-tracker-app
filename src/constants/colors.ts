export interface ThemeColors {
	primary: string;
	secondary: string;
	accent: string;

	background: string;
	surface: string;
	mutedSurface: string;

	textPrimary: string;
	textSecondary: string;
	textDisabled: string;

	border: string;
	shadow: string;

	success: string;
	warning: string;
	danger: string;
}

export const warmCozyLight: ThemeColors = {
	primary: "#B08968",
	secondary: "#DDB892",
	accent: "#FFCB77",

	background: "#FFF4E6",
	surface: "#FFFFFF",
	mutedSurface: "#FFF8F1",

	textPrimary: "#2D2D2D",
	textSecondary: "#6E6E6E",
	textDisabled: "#A8A8A8",

	border: "#E7D7C1",
	shadow: "rgba(45, 45, 45, 0.08)",

	success: "#34D399",
	warning: "#FBBF24",
	danger: "#EF4444",
};

export const warmCozyDark: ThemeColors = {
	primary: "#8B6B4A",
	secondary: "#AA8A6B",
	accent: "#E6B25E",

	background: "#0F0B08",
	surface: "#1B1816",
	mutedSurface: "#151310",

	textPrimary: "#F4EFEA",
	textSecondary: "#D2C7BD",
	textDisabled: "#9E958D",

	border: "#2A241F",
	shadow: "rgba(0, 0, 0, 0.6)",

	success: "#2DD4BF",
	warning: "#F59E0B",
	danger: "#F97373",
};
