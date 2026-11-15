<script lang="ts">
    import Carol from "#lib/components/Carol.svelte";
    import CarrolObject from "#lib/components/CarrolObject.svelte";
</script>

<main class="main">
    <h1 class="center">About me</h1>
    <p class="center">
        Hello! I am Daniel Van Dalsem. I am currently a Senior studing Computer
        Science at the University of Kansas.
    </p>
</main>

<style>
    @import url("#lib/css/mixins.css");
    h1 {
        justify-self: center;
    }
    .main {
        @mixin grid-stack;
        @mixin padding 4;
        @mixin gap 2;
        @mixin grid-center-x;
    }
    .mainer {
        @mixin grid-stack;
        @mixin padding 4;
        @mixin gap 2;
        @mixin grid-center-x;
    }

    .carol {
        @mixin grid-auto;
        @mixin padding 4;
        @mixin gap 2;
        @mixin grid-center-x;
    }

    .center {
        justify-self: center;
    }
    img {
        display: block;
        width: 100%;
        object-fit: contain;
        justify-self: center;
        @mixin outline var(--outline-color), 1px, 0, var(--radius-lg);
    }
</style>
