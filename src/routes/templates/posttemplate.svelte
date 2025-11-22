<script lang="ts">
	interface Props {
		title?: string;
		children?: import("svelte").Snippet;
	}

	let { title = "placeholder", children }: Props = $props();
</script>

<li>
	<div class="blogbox">
		<h1 class="title">
			<a href="/details/{title.replace(' ', '')}">{title}</a>
		</h1>
		<br />
		<p>
			{@render children?.()}
		</p>
	</div>
</li>
