import { defineConfig } from "vitest/config";
import { sveltekit } from "@sveltejs/kit/vite";
import { playwright } from '@vitest/browser-playwright'
import deno from "@deno/vite-plugin";
export default defineConfig({
	plugins: [sveltekit(), deno()],

	test: {
		expect: { requireAssertions: true },
		projects: [
			{
				extends: "./vite.config.ts",

				test: {
					name: "client",
					browser: {
						enabled: true,
						provider: playwright(),
						instances: [{ browser: "firefox" }, { browser: "chromium" }, { browser: "webkit" }],
					},
					include: ["src/**/*.svelte.{test,spec}.{js,ts}"],
					exclude: ["src/lib/server/**"],
					setupFiles: ["./vitest-setup-client.ts"],
				},
			},
			{
				extends: "./vite.config.ts",
				test: {
					name: "server",
					environment: "node",
					include: ["src/**/*.{test,spec}.{js,ts}"],
					exclude: ["src/**/*.svelte.{test,spec}.{js,ts}"],
				},
			},
		],
	},
});
