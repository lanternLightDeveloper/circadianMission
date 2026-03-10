<script lang="ts">
	import '$lib/Styles/baseCamp.svelte';
	import Menu from '$lib/Assets/Menu.svelte';
	import Footer from '$lib/Assets/Footer.svelte';

	let { children } = $props();
</script>

<Menu />
{@render children()}
<Footer />
