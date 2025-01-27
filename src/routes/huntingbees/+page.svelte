<script lang="ts">
let holder: number = 0;
let placenum: number = 0;
let bees: number = placenum * 25;
let hints: number = notzero(Math.floor(10 * (bees - 50)));
let clues: number = cluesget(hints);
let secrets: number = secretsget(clues);
let tales: number = talesget(secrets);
let implications: number = implicationsget(tales);
let incunabulums: number = incunabulumsget(implications);
function calc() {
	placenum = holder;
	bees = placenum * 25;
	hints = notzero(Math.floor(10 * (bees - 50)));
	clues = cluesget(hints);
	secrets = secretsget(clues);
	tales = talesget(secrets);
	implications = implicationsget(tales);
	incunabulums = incunabulumsget(implications);
}
function incunabulumsget(implications: number): number {
	return Math.floor(implications / 25) * 5;
}
function implicationsget(tales: number): number {
	return Math.floor(tales / 50) * 10;
}
function talesget(secrets: number): number {
	return Math.floor(secrets / 333) * 105;
}
function secretsget(clues: number): number {
	return Math.floor(clues / 500) * 70;
}
function cluesget(hints: number): number {
	return Math.floor(hints / 500) * 200;
}
function notzero(num: number): number {
	if (num < 0) {
		return 0;
	} else {
		return num;
	}
}
</script>

<main class="">
	<div class="centergrid fade2s">
		<ul>
			<li>
				<p>
					This assumes your only using <a
						href="https://fallenlondon.wiki/wiki/Set_an_ambush">set an ambush</a
					>
					or
					<a href="https://fallenlondon.wiki/wiki/Sow_carnage">sow carnage</a>,
					that your success chance is 100% and that you are only bulk
					converting.
				</p>
			</li>
			<li>
				<br />
				<form on:submit|preventDefault={calc}>
					<input
						bind:value={holder}
						placeholder="enter bee amount"
						class="small-button"
					/>
					<button disabled={!holder} type="submit" class="submit">Submit</button
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
