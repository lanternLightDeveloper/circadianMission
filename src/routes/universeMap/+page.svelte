<script lang="ts">
	import InnerCity from './InnerCity.svelte';
	import OuterCity from './OuterCity.svelte';
	import WildSpace from './WildSpace.svelte';

	let openInnerCity = $state(false);
	let openOuterCity = $state(false);
	let openWildSpace = $state(false);

	function InnerCityToggle() {
		openInnerCity = !openInnerCity;
	}

	function OuterCityToggle() {
		openOuterCity = !openOuterCity;
	}

	function WildSpaceToggle() {
		openWildSpace = !openWildSpace;
	}
</script>

<h3>Universe Map Homepage</h3>

<button onclick={InnerCityToggle}>Toggle Inner City</button>
<button onclick={OuterCityToggle}>Toggle Outer City</button>
<button onclick={WildSpaceToggle}>Toggle Wild Space</button>

{#if openInnerCity === true}
	<InnerCity />
{/if}

{#if openOuterCity === true}
	<OuterCity />
{/if}

{#if openWildSpace === true}
	<WildSpace />
{/if}
