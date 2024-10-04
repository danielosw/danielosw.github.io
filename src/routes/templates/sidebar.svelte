<script lang="ts">
import "./sidebar.css";
let isDropdownOpen = false; // default state (dropdown close)

const handleDropdownClick = () => {
	isDropdownOpen = !isDropdownOpen; // togle state on click
};
const handleDropdownfocusout = ({ relatedTarget, currentTarget }) => {
	if (
		relatedTarget instanceof HTMLElement &&
		currentTarget.contains(relatedTarget)
	)
		return;
	isDropdownOpen = false;
};
</script>

<div class="barwrap">
    
    <div class="dropdown" on:focusout={handleDropdownfocusout}>
        <button class=" m-1" on:click={handleDropdownClick}>
            {#if isDropdownOpen}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block h-6 w-6 stroke-current"
                >
                    <title>Close Dropdown</title>
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            {:else}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block h-6 w-6 stroke-current"
                >
                    <title>Open Dropdown</title>
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            {/if}
        </button>
        <ul class="" style:display={isDropdownOpen ? 'inline' : 'none'}>
			<li class="droplink"><a href="/">Home page</a></li>
            <li class="droplink"><a href="/blog">Blogs</a></li>
            <li class="droplink"><a href="/huntingbees">Fallen London Calculators</a></li>
            </ul>
            <noscript>
                <ul class="">
                    <li class="droplink"><a href="/">Home page</a></li>
                    <li class="droplink"><a href="/blog">Blogs</a></li>
                    <li class="droplink"><a href="/huntingbees">Fallen London Calculators</a></li>
                    </ul>
            </noscript>
    </div>
    
</div>
