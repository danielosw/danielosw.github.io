<script lang="ts">
	import "./foot.css";
	interface Props {
		children?: import("svelte").Snippet;
	}
	let { children }: Props = $props();
</script>

<div class="footer">
	<p>
		{@render children?.()}
	</p>
</div>
