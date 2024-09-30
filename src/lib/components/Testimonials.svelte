<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';

	interface TestimonialProps {
		image: string;
		name: string;
		userName: string;
		comment: string;
	}

	const testimonials: TestimonialProps[] = [
		{
			image: 'https://github.com/shadcn.png',
			name: 'John Doe Svelte',
			userName: '@john_Doe',
			comment: 'This landing page is awesome!'
		},
		{
			image: 'https://github.com/shadcn.png',
			name: 'John Doe Svelte',
			userName: '@john_Doe1',
			comment:
				'Lorem ipsum dolor sit amet,empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
		},

		{
			image: 'https://github.com/shadcn.png',
			name: 'John Doe Svelte',
			userName: '@john_Doe2',
			comment:
				'Lorem ipsum dolor sit amet,exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
		},
		{
			image: 'https://github.com/shadcn.png',
			name: 'John Doe Svelte',
			userName: '@john_Doe3',
			comment:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
		},
		{
			image: 'https://github.com/shadcn.png',
			name: 'John Doe Svelte',
			userName: '@john_Doe4',
			comment:
				'Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud.'
		},
		{
			image: 'https://github.com/shadcn.png',
			name: 'John Doe Svelte',
			userName: '@john_Doe5',
			comment:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		}
	];
</script>

<section id="testimonials" class="container py-24 sm:py-32">
	<h2 class="text-3xl font-bold md:text-4xl">
		Discover Why
		<span class="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
			{' '}
			People Love{' '}
		</span>
		This Landing Page
	</h2>

	<p class="pb-8 pt-4 text-xl text-muted-foreground">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non unde error facere hic reiciendis
		illo
	</p>

	<div
		class="mx-auto grid columns-2 space-y-4 sm:block md:grid-cols-2 lg:columns-3 lg:grid-cols-4 lg:gap-6 lg:space-y-6"
	>
		{#each testimonials as { image, name, userName, comment }}
			<Card.Root class="max-w-md overflow-hidden md:break-inside-avoid">
				<Card.Header class="flex flex-row items-center gap-4 pb-2">
					<Avatar.Root>
						<Avatar.Image alt="" src={image} />
						<Avatar.Fallback>OM</Avatar.Fallback>
					</Avatar.Root>

					<div class="flex flex-col">
						<Card.Title class="text-lg">{name}</Card.Title>
						<Card.Description>{userName}</Card.Description>
					</div>
				</Card.Header>

				<Card.Content>{comment}</Card.Content>
			</Card.Root>
		{/each}
	</div>
</section>
