/**
 * Storage utilities for handling localStorage operations safely
 */
import AsyncStorage from "@react-native-async-storage/async-storage";
/**
 * Safely get item from localStorage
 * @param {string} key - Storage key
 * @param {*} defaultValue - Default value if key doesn't exist
 * @returns {*} Parsed value or default
 */

export const getStorageItem = async (
	key: string,
	defaultValue: string | null = null,
): Promise<string | null> => {
	try {
		const item = await AsyncStorage.getItem(key);
		return item ? JSON.parse(item) : defaultValue;
	} catch (error) {
		console.warn(`Error reading storage key "${key}":`, error);
		return defaultValue;
	}
};

/**
 * Safely set item in localStorage
 * @param {string} key - Storage key
 * @param {*} value - Value to store
 * @returns {boolean} Success status
 */

export const setStorageItem = async (
	key: string,
	value: any = "",
): Promise<boolean> => {
	try {
		await AsyncStorage.setItem(key, value);
		return true;
	} catch {
		return false;
	}
};

/**
 * Safely remove item from localStorage
 * @param {string} key - Storage key
 * @returns {boolean} Success status
 */

export const removeStorageItem = async (key: string): Promise<boolean> => {
	try {
		await AsyncStorage.removeItem(key);
		return true;
	} catch {
		return false;
	}
};

/**
 * Check if localStorage is available
 * @returns {boolean} Availability status
 */
export const isStorageAvailable = async (): Promise<boolean> => {
	try {
		const test = "__storage_test__";
		await AsyncStorage.setItem(test, test);
		await AsyncStorage.removeItem(test);
		return true;
	} catch {
		return false;
	}
};
