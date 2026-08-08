<script lang="ts">
    import Card from "$lib/components/Card.svelte";
    import { resolve } from "$app/paths";
</script>

<main class="main">
    <h1 class="center">Projects</h1>
    <div class="cards">
        <a class="linkto" href={resolve("/projects")}>
            <Card>
                <h2>danielosw.github.io</h2>
            </Card>
        </a>
        <a class="linkto" href={resolve("/about")}>
            <Card>
                <h2>Quiz app</h2>
            </Card>
        </a>
        <a class="linkto" href={resolve("/about")}>
            <Card>
                <h2>Quash</h2>
            </Card>
        </a>
    </div>
</main>

<style>
    @import url("$lib/css/mixins.css");
    .linkto {
        @mixin button-link;
    }
    .cards {
        @mixin grid-column;
        @mixin gap 16;
        @mixin grid-center-x;
        @mixin grid-auto-fit-rows;
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
