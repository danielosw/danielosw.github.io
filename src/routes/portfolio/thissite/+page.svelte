<script lang="ts">
	import type { PageProps } from "./$types";
	import Post from "$lib/templates/detailtemplate.svelte";

	let { data }: PageProps = $props();
</script>

<Post title="This site">
	<p>
		This site, danielosw.github.io, has been a long term project that I work
		away at from time to time. I started it to learn how to build a site and
		I think it has been pretty good at that.
	</p>
</Post>
