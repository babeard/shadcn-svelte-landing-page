<script lang="ts">
	import { base } from '$app/paths';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	import { Menu, GithubIcon } from 'lucide-svelte';
	import LogoIcon from '$lib/components/icons/Logo.svelte';

	import ModeToggle from './mode-toggle.svelte';

	interface RouteProps {
		href: string;
		label: string;
	}

	const routeList: RouteProps[] = [
		{
			href: '#features',
			label: 'Features'
		},
		{
			href: '#testimonials',
			label: 'Testimonials'
		},
		{
			href: '#pricing',
			label: 'Pricing'
		},
		{
			href: '#faq',
			label: 'FAQ'
		}
	];
</script>

{#snippet routes(list: RouteProps[], className: string = '')}
	{#each list as { href, label }, i}
		{#key i}
			<Button variant="ghost" {href} rel="noreferrer noopener" class={className}>
				{label}
			</Button>
		{/key}
	{/each}
{/snippet}

<header
	class="sticky top-0 z-40 w-full border-b-[1px] bg-white dark:border-b-slate-700 dark:bg-background"
>
	<div class="mx-auto">
		<div class="container flex h-14 w-screen items-center justify-between px-4">
			<div class="flex font-bold">
				<a rel="noreferrer noopener" href="{base}/" class="ml-2 flex text-xl font-bold">
					<LogoIcon />
					ShadcnUI/Svelte
				</a>
			</div>

			<!-- {/* mobile */} -->
			<span class="flex md:hidden">
				<ModeToggle />

				<Sheet.Root>
					<Sheet.Trigger asChild let:builder class="px-2">
						<Button builders={[builder]} size="icon" variant="outline" class="sm:hidden">
							<Menu class="flex h-5 w-5 md:hidden">
								<span class="sr-only">Menu Icon</span>
							</Menu>
						</Button>
					</Sheet.Trigger>

					<Sheet.Content side="left">
						<Sheet.Header>
							<Sheet.Title class="text-xl font-bold">Shadcn/Svelte</Sheet.Title>
						</Sheet.Header>
						<nav class="mt-4 flex flex-col items-center justify-center gap-2">
							{@render routes(routeList)}

							<Button
								rel="noreferrer noopener"
								href="https://github.com/babeard/shadcn-svelte-landing-page.git"
								target="_blank"
								variant="secondary"
								class="w-[110px] border"
							>
								<GithubIcon class="mr-2 h-5 w-5" />
								Github
							</Button>
						</nav>
					</Sheet.Content>
				</Sheet.Root>
			</span>

			<!-- {/* desktop */} -->
			<nav class="hidden gap-2 md:flex">
				{@render routes(routeList, 'text-[17px]')}
			</nav>

			<div class="hidden gap-2 md:flex">
				<Button
					rel="noreferrer noopener"
					href="https://github.com/babeard/shadcn-svelte-landing-page.git"
					target="_blank"
					variant="secondary"
					class="border"
				>
					<GithubIcon class="mr-2 h-5 w-5" />
					Github
				</Button>

				<ModeToggle />
			</div>
		</div>
	</div>
</header>
