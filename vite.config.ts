import { defineConfig } from "vitest/config";
import { sveltekit } from "@sveltejs/kit/vite";
import { playwright } from '@vitest/browser-playwright'
import deno from "@deno/vite-plugin";
// Note: @vitejs/plugin-legacy is temporarily disabled due to incompatibility with SvelteKit + Vite 7
// See: https://github.com/sveltejs/kit/issues/13299
// The plugin causes vite.build() to return an array instead of a single RollupOutput,
// which breaks SvelteKit's internal build process.
// import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
	plugins: [deno(), sveltekit()],

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
