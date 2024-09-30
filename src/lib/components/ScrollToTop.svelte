<script lang="ts">
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { Button } from '$lib/components/ui/button';

	import { ArrowUpToLine } from 'lucide-svelte';

	let scrollY = $state(0);
	let show = $state(false);

	$effect(() => {
		show = scrollY > 400;
	});

	const goToTop = () => {
		window.scroll({ top: 0, left: 0 });
	};
</script>

<svelte:window bind:scrollY />

{#if show}
	<div
		class="fixed bottom-4 right-4"
		transition:scale={{ duration: 400, delay: 100, opacity: 0.5, start: 0, easing: quintOut }}
	>
		<Button onclick={goToTop} class="opacity-90 shadow-md" size="icon">
			<ArrowUpToLine className="h-4 w-4" />
		</Button>
	</div>
{/if}
