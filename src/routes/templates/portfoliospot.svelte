<script lang="ts">
    export let title = "placeholder";
    export let href = "placeholder";
    export let imgsrc = "placeholder";
    export let alt = "placeholder";
</script>
<div class="fade1s indiportwrap">
    <a {href}>
        <img {alt} src="{imgsrc}">
        <h1>{title}</h1>
        <p>
            <slot></slot>
        </p>
    </a>
</div>