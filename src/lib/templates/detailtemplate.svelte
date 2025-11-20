<script lang="ts">
	interface Props {
		title?: string;
		children?: import('svelte').Snippet<[any]>;
	}

	let { title = "temp", children }: Props = $props();
</script>

<!-- -->
<main class="mainwrap">
	<div class="virtgrid">
		<div class="blogwrap">
			<h1 class="title">{title}</h1>
			<div>
				{@render children?.({ class: "", })}
			</div>
		</div>
	</div>
</main>
