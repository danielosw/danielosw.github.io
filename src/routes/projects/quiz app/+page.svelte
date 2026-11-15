<script lang="ts">
    import lightMain from "#lib/assets/quiz images/testing Main Page light.png";
    import darkMain from "#lib/assets/quiz images/testing Main Page.png";
    import pastQuizes from "#lib/assets/quiz images/past quizes.png";
    import pastQuiz from "#lib/assets/quiz images/past quiz.png";
    import quizSetup from "#lib/assets/quiz images/quiz setup.png";
    import takingQuiz from "#lib/assets/quiz images/taking quiz.png";
    import loginPage from "#lib/assets/quiz images/login page.png";
    import Carol from "#lib/components/Carol.svelte";
    import CarrolObject from "#lib/components/CarrolObject.svelte";
</script>

<main class="main">
    <h1 class="center">Testing website</h1>
    <p class="center">
        A fullstack testing website built over the summer of 2026. Uses Digital
        Ocean, Postgresql, Sveltekit, Postcss, and Drizzle. Takes both github
        and google as o-auth sign-ins.
    </p>
    <Carol>
        <CarrolObject>
            <h2 class="">Light mode</h2>

            <img
                src={lightMain}
                alt="Screenshot of the main page of quiz.danielosw.com"
            />
        </CarrolObject>
        <CarrolObject>
            <h2>Dark mode</h2>
            <img
                src={darkMain}
                alt="Screenshot of the main page of quiz.danielosw.com"
            />
        </CarrolObject>
        <CarrolObject>
            <h2>Login page</h2>
            <img src={loginPage} />
        </CarrolObject>
        <CarrolObject>
            <h2>Past quizes page</h2>
            <img src={pastQuizes} />
        </CarrolObject>
        <CarrolObject>
            <h2>Details on a past quiz</h2>
            <img src={pastQuiz} />
        </CarrolObject>
        <CarrolObject>
            <h2>Quiz setup page</h2>
            <img src={quizSetup} />
        </CarrolObject>
        <CarrolObject>
            <h2>Taking quiz page</h2>
            <img src={takingQuiz} />
        </CarrolObject>
    </Carol>
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
        object-fit: contain;
        justify-self: center;
        @mixin outline var(--outline-color), 1px, 0, var(--radius-lg);
    }
</style>
