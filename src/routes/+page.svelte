<script lang="ts">
    import Card from "$lib/components/Card.svelte";
    import { resolve } from "$app/paths";
</script>

<main class="main">
    <h1 class="center">Hello!</h1>
    <p class="center">Welcome to my website.</p>
    <div class="cards">
        <a class="linkto" href={resolve("/projects")}>
            <Card>
                <h2>Projects</h2>
                <p>Check out my projects on GitHub.</p>
            </Card>
        </a>
        <a class="linkto" href={resolve("/about")}>
            <Card>
                <h2>About me</h2>
                <p>Learn more about me and my background.</p>
            </Card>
        </a>
    </div>
</main>

<style>
    @import url("$lib/css/buttons.css");
    @import url("$lib/css/text.css");
    @import url("$lib/css/grid.css");
    @import url("$lib/css/padding.css");
    @import url("$lib/css/gap.css");
    .linkto {
        @mixin button-link;
    }
    .cards {
        @mixin grid-column;
        @mixin gap 16;
        @mixin grid-center-x;
        @mixin grid-auto-fit-columns;
    }
    .main {
        @mixin grid-stack;
        @mixin padding 4;
        @mixin gap 2;
        @mixin grid-center-x;
    }
    .center {
        justify-self: center;
    }
</style>
