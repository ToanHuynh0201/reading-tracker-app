import { Tabs } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: "#6366f1",
				tabBarInactiveTintColor: "#9ca3af",
			}}>
			<Tabs.Screen
				name="library"
				options={{
					title: "Library",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="book" size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="home" size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="stats"
				options={{
					title: "Stats",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="stats-chart" size={size} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
