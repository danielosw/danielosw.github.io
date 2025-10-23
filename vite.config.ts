import { defineConfig } from "vitest/config";
import { sveltekit } from "@sveltejs/kit/vite";
import { playwright } from '@vitest/browser-playwright'

export default defineConfig({
	plugins: [sveltekit()],
	
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
						instances: [{ browser: "firefox" }],
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
					include: ["e2e/**/*.{test,spec}.{js,ts}"],
					exclude: ["e2e/**/*.svelte.{test,spec}.{js,ts}"],
				},
			},
		],
	},
});
