<script lang="ts">
	import { base } from '$app/paths';
	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card';

	interface FeatureProps {
		title: string;
		description: string;
		image: string;
	}

	const features: FeatureProps[] = [
		{
			title: 'Responsive Design',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
			image: `${base}/looking-ahead.png`
		},
		{
			title: 'Intuitive user interface',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
			image: `${base}/reflecting.png`
		},
		{
			title: 'AI-Powered insights',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
			image: `${base}/growth.png`
		}
	];

	const featureList: string[] = [
		'Dark/Light theme',
		'Reviews',
		'Features',
		'Pricing',
		'Contact form',
		'Our team',
		'Responsive design',
		'Newsletter',
		'Minimalist'
	];
</script>

<section id="features" class="container space-y-8 py-24 sm:py-32">
	<h2 class="text-3xl font-bold md:text-center lg:text-4xl">
		Many{' '}
		<span class="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
			Great Features
		</span>
	</h2>

	<div class="flex flex-wrap gap-4 md:justify-center">
		{#each featureList as feature}
			<div>
				<Badge variant="secondary" class="text-sm">
					{feature}
				</Badge>
			</div>
		{/each}
	</div>

	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each features as { title, description, image }}
			<Card.Root>
				<Card.Header>
					<Card.Title>{title}</Card.Title>
				</Card.Header>

				<Card.Content>{description}</Card.Content>

				<Card.Footer>
					<img src={image} alt="About feature" class="mx-auto w-[200px] lg:w-[300px]" />
				</Card.Footer>
			</Card.Root>
		{/each}
	</div>
</section>
