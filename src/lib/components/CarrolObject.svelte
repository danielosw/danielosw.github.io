<script lang="ts">
    let { children } = $props();
</script>

<div class="mainer">
    {@render children()}
</div>

<style>
    @import url("#lib/css/mixins.css");
    .mainer {
        @mixin grid-stack;
        @mixin padding 4;
        @mixin gap 2;
        @mixin grid-center-x;
    }
</style>
