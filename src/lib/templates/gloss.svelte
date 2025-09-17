<script lang="ts">
	interface Props {
		i?: string;
		children?: import('svelte').Snippet<[any]>;
	}

	let { i = "", children }: Props = $props();
</script>

<main class="">
	<div class={i}>
		{@render children?.({ class: "", })}
	</div>
</main>
