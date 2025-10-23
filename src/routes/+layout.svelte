<script lang="ts">
	import Footer from "./templates/footer.svelte";
	import Sidebar from "./templates/sidebar.svelte";
	interface Props {
		children?: import("svelte").Snippet;
	}

	let { children }: Props = $props();
</script>

{@render children?.()}
<Sidebar>
	<li class="droplink fade1"><a href="/">Home</a></li>
	<li class="droplink fade2"><a href="/blog">Blogs</a></li>
	<li class="droplink fade3">
		<a href="/huntingbees">Calculators</a>
	</li>
	<li class="droplink fade4">
		<a href="/portfolio">Portfolio</a>
	</li>
</Sidebar>
<Footer
	>All code is licenced under the AGPL 3.0, except samples, or when noted
	otherwise. All non-code writings are under the Creative Commons
	Attribution-ShareAlike 4.0 International, unless otherwise noted.</Footer
>
