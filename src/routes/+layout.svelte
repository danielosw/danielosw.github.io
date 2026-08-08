<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<style>
	@import url("layout.css");
	@media (prefers-color-scheme: dark) {
		@mixin dark-theme;
	}

	@media (prefers-color-scheme: light) {
		@mixin light-theme;
	}
</style>
