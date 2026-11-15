<script lang="ts">
    import desktopImage from "#lib/assets/desktop screenshot.png";
    import mobileImage from "#lib/assets/mobile screenshot.png";
</script>

<main class="main">
    <h1 class="center">danielosw.com</h1>
    <p class="center">
        This very website. Written with Sveltekit+postcss, with a minimal,
        adoptive design
    </p>
    <div class="carol">
        <div class="mainer">
            <h2 class="">Desktop site</h2>

            <img src={desktopImage} alt="Screenshot of main page on desktop" />
        </div>
        <div class="mainer">
            <h2>Mobile site</h2>
            <img src={mobileImage} alt="Screenshot of main page on mobile" />
        </div>
    </div>
</main>

<style>
    @import url("#lib/css/mixins.css");
    h2 {
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
        height: clamp(12rem, 35vw, 24rem);
        object-fit: contain;
        justify-self: center;
    }
</style>
