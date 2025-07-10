<script lang="ts">
	import "./index.css";
	import Gloss from "$lib/templates/gloss.svelte";
</script>

<main class="">
	<div class="menu">
		<ul>
			<li>
				<p class="text-item fade1s">
					Hello! I am Daniel, and welcome to my site.
				</p>
			</li>
			<li>
				<div class="text-item fade2s">My Projects</div>
			</li>
			<Gloss i="gloss">
				<li class="link-item fade3s">
					<a href="/huntingbees"> fallen london calculators</a>
				</li>
			</Gloss>
			<Gloss i="gloss">
				<li class="link-item fade4s">
					<a href="/blog"> My blog</a>
				</li>
			</Gloss>
			<Gloss i="gloss">
				<li class="link-item fade5s">
					<a href="/portfolio"> My portfolio</a>
				</li>
			</Gloss>
		</ul>
	</div>
</main>
