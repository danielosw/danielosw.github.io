<script lang="ts">
import Footer from "./templates/footer.svelte";
import "./index.css"

</script>
<main class="">
    <div class="menu">
        <ul>
        <li>
            <p class="small-button fade bg-purple-500">
            Hello! I am Daniel, and welcome to my site.
        </p></li>
        <li>
            <div class="small-button fade1 bg-violet-500">
                My Projects
            </div></li>
            <li class="bg-red-500 fade2 small-button">
                <a href="/huntingbees"> fallen london calculators</a>
            </li>
            <li class="bg-red-500 fade3 small-button">
                <a href="/blog"> My blog</a>
            </li>
        </ul>
    </div>
    <Footer></Footer>
</main>