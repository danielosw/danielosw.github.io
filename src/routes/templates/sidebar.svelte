<script lang="ts">
	import "./sidebar.css";
	import "$lib/animations/dropdown.css";
	let isDropdownOpen = false; // default state (dropdown close)

	const handleDropdownClick = () => {
		isDropdownOpen = !isDropdownOpen; // toggle state on click
	};
</script>

<div class="barwrap">
	<div class="dropdown">
		<button class=" m-1" on:click={handleDropdownClick}>
			{#if isDropdownOpen}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="buttonbar"
				>
					<title>Close Dropdown</title>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="buttonbar"
				>
					<title>Open Dropdown</title>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			{/if}
		</button>
		<ul class="" style:display={isDropdownOpen ? "inline" : "none"}>
			<div class="wrapper1">
				<li class="droplink fade1"><a href="/">Home</a></li>
				<li class="droplink fade2"><a href="/blog">Blogs</a></li>
				<li class="droplink fade3">
					<a href="/huntingbees">Calculators</a>
				</li>
				<li class="droplink fade4">
					<a href="/portfolio">Portfolio</a>
				</li>
			</div>
		</ul>
		<noscript>
			<ul class="">
				<li class="droplink"><a href="/">Home</a></li>
				<li class="droplink"><a href="/blog">Blogs</a></li>
				<li class="droplink"><a href="/huntingbees">Calculators</a></li>
				<li class="droplink"><a href="/portfolio">Portfolio</a></li>
			</ul>
		</noscript>
	</div>
</div>
