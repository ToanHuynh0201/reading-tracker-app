import { createContext, ReactNode, useEffect, useState } from "react";
import { ThemeColors, warmCozyDark, warmCozyLight } from "../constants/colors";
import { getStorageItem, setStorageItem } from "../utils/storage";

type ThemeMode = "light" | "dark";

interface ThemeContextType {
	theme: ThemeColors;
	themeMode: ThemeMode;
	toggleTheme: () => void;
	setTheme: (mode: ThemeMode) => void;
	isLoading: boolean;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
	undefined,
);

const THEME_STORAGE_KEY = "@app_theme_mode";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [themeMode, setThemeMode] = useState<ThemeMode>("light");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		loadTheme();
	}, []);

	const loadTheme = async () => {
		try {
			const savedTheme = await getStorageItem(THEME_STORAGE_KEY);

			if (savedTheme === "dark" || savedTheme === "light") {
				setThemeMode(savedTheme);
			}
		} catch (error) {
			console.error("Error loading theme:", error);
		} finally {
			setIsLoading(false);
		}
	};

	const saveTheme = async (mode: ThemeMode) => {
		const success = await setStorageItem(
			THEME_STORAGE_KEY,
			JSON.stringify(mode),
		);

		if (!success) {
			console.error("Failed to save theme preference");
		}
	};

	const setTheme = (mode: ThemeMode) => {
		setThemeMode(mode);
		saveTheme(mode);
	};

	const toggleTheme = () => {
		const newMode = themeMode === "light" ? "dark" : "light";
		setTheme(newMode);
	};

	const theme = themeMode === "light" ? warmCozyLight : warmCozyDark;

	return (
		<ThemeContext.Provider
			value={{
				theme,
				themeMode,
				toggleTheme,
				setTheme,
				isLoading,
			}}>
			{children}
		</ThemeContext.Provider>
	);
};
