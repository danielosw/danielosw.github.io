<script lang="ts">
	import Footer from "./templates/footer.svelte";
	import Sidebar from "./templates/sidebar.svelte";
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

{@render children?.()}
<Sidebar></Sidebar>
<Footer></Footer>

