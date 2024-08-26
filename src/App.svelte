<script>
    import Router from "svelte-spa-router";
    import Home from "./routes/Home.svelte";
    import HuntingBees from "./routes/HuntingBees.svelte";

    const routes = {
        "/": Home,
        "/huntingbees": HuntingBees,
    };
</script>

<main>
    <Router {routes} />
</main>
