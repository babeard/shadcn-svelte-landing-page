<script>
	import { base } from '$app/paths';

	import About from '$lib/components/About.svelte';
	import Cta from '$lib/components/Cta.svelte';
	import Features from '$lib/components/Features.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Newsletter from '$lib/components/Newsletter.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import Services from '$lib/components/Services.svelte';
	import Sponsors from '$lib/components/Sponsors.svelte';
	import Team from '$lib/components/Team.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
</script>

<svelte:head>
	<title>Shadcn/Svelte - Landing template</title>
	<meta name="title" content="Shadcn/Svelte - Landing template" />
	<meta name="description" content="Free Shadcn landing page for Svelte developers" />
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://github.com/babeard/shadcn-svelte-landing-page.git" />
	<meta property="og:title" content="Shadcn/Svelte - Landing template" />
	<meta property="og:description" content="Free Shadcn landing page for Svelte developers" />
	<meta property="og:image" content="{base}/meta-preview.jpg" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />

	<meta name="twitter:url" content="https://github.com/babeard/shadcn-svelte-landing-page.git" />
	<meta name="twitter:title" content="Shadcn/Svelte - Landing template" />
	<meta name="twitter:description" content="Free Shadcn landing page for Svelte developers" />
	<meta name="twitter:image" content="{base}/meta-preview.jpg" />
</svelte:head>

<Navbar />
<Hero />
<Sponsors />
<About />
<HowItWorks />
<Features />
<Services />
<Cta />
<Testimonials />
<Team />
<Pricing />
<Newsletter />
<FAQ />
<Footer />
<ScrollToTop />
