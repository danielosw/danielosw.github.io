<script lang="ts">
    let { children } = $props();
</script>

<div class="carol">{@render children()}</div>

<style>
    @import url("#lib/css/mixins.css");

    .carol {
        @mixin grid-stack;
        @mixin padding 4;
        @mixin gap 2;
        @mixin grid-center-x;
        box-sizing: border-box;
        grid-template-columns: repeat(auto-fit, minmax(min(50rem, 100%), 1fr));
        width: min(100%, 240rem);
    }
</style>
