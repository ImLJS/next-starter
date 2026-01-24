import type { Config } from "drizzle-kit";

import { env } from "@/env";

export default {
	schema: "./src/lib/db/schemas/index.ts",
	dialect: "postgresql",
	dbCredentials: {
		url: env.DATABASE_URL,
	},
	tablesFilter: ["next-starter_*"],
} satisfies Config;
