<script lang="ts">
    export let title = "placeholder";
</script>

<li>
    <div class="blogbox">
        <h1 class="title">
            {title}
        </h1>
        <br />
        <p>
            <slot></slot>
        </p>
    </div>
</li>
