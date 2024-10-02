<script lang="ts">
import Footer from "./templates/footer.svelte";
import Sidebar from "./templates/sidebar.svelte";
import "$lib/animations/fade.css";
</script>
<slot></slot>
<Sidebar></Sidebar>
<Footer></Footer>