<script lang="ts">
	import '../app.css';
	import type { Snippet } from 'svelte';
	import { ModeWatcher } from 'mode-watcher';

	// Render static site for gh-pages
	export const prerender = true;

	type Props = {
		children: Snippet;
	};

	const { children }: Props = $props();
</script>

<ModeWatcher />

{@render children()}
