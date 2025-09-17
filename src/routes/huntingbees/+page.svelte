<script lang="ts">
	import { preventDefault } from "svelte/legacy";

	let holder: number = $state(0);
	let placenum: number = $state(0);
	let bees: number = $state(0);
	let hints: number = $state(0);
	let clues: number = $state(0);
	let secrets: number = $state(0);
	let tales: number = $state(0);
	let implications: number = $state(0);
	let incunabulums: number = $state(0);
	function calc() {
		placenum = holder;
		bees = placenum * 25;
		hints = Math.max(Math.floor(10 * (bees - 50)), 0);
		clues = Math.floor(hints / 500) * 200;
		secrets = Math.floor(clues / 500) * 70;
		tales = Math.floor(secrets / 333) * 105;
		implications = Math.floor(tales / 50) * 10;
		incunabulums = Math.floor(implications / 25) * 5;
	}
</script>

<main class="">
	<div class="centergrid fade2s">
		<ul>
			<li>
				<p>
					This assumes your only using <a
						href="https://fallenlondon.wiki/wiki/Set_an_ambush"
						>set an ambush</a
					>
					or
					<a href="https://fallenlondon.wiki/wiki/Sow_carnage"
						>sow carnage</a
					>, that your success chance is 100% and that you are only
					bulk converting.
				</p>
			</li>
			<li>
				<br />
				<form onsubmit={preventDefault(calc)}>
					<input
						bind:value={holder}
						placeholder="enter bee amount"
						class="small-button"
					/>
					<button disabled={!holder} type="submit" class="submit"
						>Submit</button
					>
				</form>
			</li>
			<li>
				Bees caught: {bees}
			</li>
			<li>
				hints got: {hints}
			</li>
			<li>
				clues got: {clues}
			</li>
			<li>
				secrets got: {secrets}
			</li>
			<li>
				tales got: {tales}
			</li>
			<li>
				implications got: {implications}
			</li>
			<li>
				incunabulums got: {incunabulums}
			</li>
			<li>
				<p>
					actions taken catching: {placenum}
				</p>
			</li>
		</ul>
	</div>
</main>
