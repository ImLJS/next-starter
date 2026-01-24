import "@/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { Provider } from "@/provider";

export const metadata: Metadata = {
	title: "Next Starter",
	description:
		"A starter template for Next.js with TypeScript, Drizzle ORM, and Better Auth.",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html className={`${geist.variable}`} lang="en" suppressHydrationWarning>
			<body>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
};

export default RootLayout;
