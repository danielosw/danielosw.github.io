<script lang="ts">
	interface Props {
		title?: string;
		imgsrc?: string;
		alt?: string;
		children?: import("svelte").Snippet;
	}

	let {
		title = "placeholder",
		href = "placeholder",
		imgsrc = "placeholder",
		alt = "placeholder",
		children,
	}: Props = $props();
</script>

<div class="indiportwrap">
	<a href="/portfolio/{title.replace(' ', '')}">
		<img {alt} src={imgsrc} />
		<h1>
			{title}
		</h1>
		<p>
			{@render children?.()}
		</p>
	</a>
</div>
