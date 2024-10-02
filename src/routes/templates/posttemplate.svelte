<script lang="ts">
export let title = "placeholder";
</script>

<li>
    <div class="blogbox">
        <h1 class="title">
            <a href="/details/{title.replace(" ","")}">{title}</a>
        </h1>
        <br />
        <p>
            <slot></slot>
        </p>
    </div>
</li>
