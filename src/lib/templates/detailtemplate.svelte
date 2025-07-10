<script lang="ts">
	export let title = "temp";
</script>

<!-- -->
<main class="mainwrap">
	<div class="virtgrid">
		<div class="blogwrap">
			<h1 class="title fade1s">{title}</h1>
			<div class="fade2s">
				<slot class=""></slot>
			</div>
		</div>
	</div>
</main>
