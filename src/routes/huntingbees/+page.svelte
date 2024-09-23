<script lang="ts">
import Footer from "../templates/footer.svelte";
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
	if (implications < 25) {
		return 0;
	} else {
		return 5 + incunabulumsget(implications - 25);
	}
}
function implicationsget(tales: number): number {
	if (tales < 50) {
		return 0;
	} else {
		return 10 + implicationsget(tales - 50);
	}
}
function talesget(secrets: number): number {
	if (secrets < 333) {
		return 0;
	} else {
		return 105 + talesget(secrets - 333);
	}
}
function secretsget(clues: number): number {
	if (clues < 500) {
		return 0;
	} else {
		return 70 + secretsget(clues - 500);
	}
}
function cluesget(hints: number): number {
	if (hints < 500) {
		return 0;
	} else {
		return 200 + cluesget(hints - 500);
	}
}
function notzero(num: number): number {
	if (num < 0) {
		return 0;
	} else {
		return num;
	}
}
</script>

<main>
<div class="centerflex fade1">
<ul>
<li>
<p>
    This assumes your only using <a href="https://fallenlondon.wiki/wiki/Set_an_ambush">set an ambush</a> or <a href="https://fallenlondon.wiki/wiki/Sow_carnage">sow carnage</a>, that your success chance is 100% and that you are only bulk converting.
</p>
</li>
<li>
<br>
<form on:submit|preventDefault={calc}>
<input bind:value={holder} placeholder="enter bee amount" class="small-button"/>
<button disabled={!holder} type="submit" class="submit">Submit</button>
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
<Footer></Footer>
</main>