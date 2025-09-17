<script lang="ts">
	import "./sidebar.css";
	import "$lib/animations/dropdown.css";
</script>

<div class="barwrap">
	<div class="dropdown">
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
		<ul class="dropdown-content">
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
	</div>
</div>
