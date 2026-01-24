import { ThemeProvider } from "next-themes";
import { TRPCReactProvider } from "@/trpc/react";

export const Provider = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider attribute="class" disableTransitionOnChange enableSystem>
			<TRPCReactProvider>{children}</TRPCReactProvider>
		</ThemeProvider>
	);
};
