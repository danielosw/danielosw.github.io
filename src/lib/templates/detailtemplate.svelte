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
			<h1 class="title fade1s">{title}</h1>
			<div class="fade2s">
				{@render children?.({ class: "", })}
			</div>
		</div>
	</div>
</main>
