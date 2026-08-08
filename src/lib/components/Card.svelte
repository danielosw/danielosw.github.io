<script lang="ts">
    let { children } = $props();
</script>

<div class="card">
    {@render children()}
</div>

<style>
    @import url("$lib/css/constants.css");
    @import url("$lib/css/padding.css");
    @import url("$lib/css/gap.css");
    @import url("$lib/css/grid.css");
    @import url("$lib/css/outline.css");
    .card {
        @mixin grid-stack;
        @mixin outline var(--outline-color), 1px, 4, var(--radius-lg);
        width: 100%;
        place-self: stretch;
        /* on hover, scale up the card */
        &:hover {
            transform: scale(1.05);
            transition: transform 0.2s ease-in-out;
        }
    }
</style>
