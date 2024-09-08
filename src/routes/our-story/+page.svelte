<!-- src/routes/our-story/+page.svelte -->
<script>
	import AboutFounders from '$lib/components/sections/about-us/AboutFounders.svelte';
	import OurJouney from '$lib/components/sections/about-us/OurJouney.svelte';
	import OurStoryHero from '$lib/components/sections/about-us/OurStoryHero.svelte';
	import OurTeam from '$lib/components/sections/about-us/OurTeam.svelte';
</script>

<svelte:head>
	<title>Our Story | Leadership Innovation World</title>
	<meta
		name="description"
		content="Discover the journey of Leadership Innovation World and our mission to reshape education."
	/>
</svelte:head>

<OurStoryHero />
<OurJouney />

<div class="mx-16 my-16 border-l-4 border-brand-gold pl-6">
	<h3 class="mb-4 font-playfair text-2xl text-brand-burgundy">
		Unlock Your Startup's Hidden Potential
	</h3>
	<p class="mb-6 font-bricolage text-lg text-gray-700">
		What if you could reduce your startup's waste by 30% next quarter—would you let that opportunity
		pass by?
	</p>
	<a
		href="#"
		class="font-bricolage uppercase tracking-wider text-brand-gold transition duration-300 hover:text-brand-burgundy"
	>
		Learn More →
	</a>
</div>
<AboutFounders />
<!-- <OurTeam /> -->

<section id="full-story" class="bg-white">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-3xl">
			<h2 class="mb-8 font-playfair text-3xl text-brand-burgundy md:text-4xl">Our Journey</h2>
			<div class="space-y-6 font-sans text-lg text-brand-black">
				<p>
					Leadership Innovation World was born from a vision to bridge the gap between academic
					knowledge and real-world industry demands. Our founders, a team of education visionaries
					and industry leaders, recognized the need for a revolutionary approach to preparing
					students for the rapidly evolving job market.
				</p>
				<p>
					Since our inception, we have been dedicated to reshaping education by merging academic
					wisdom with industry foresight. We don't just prepare students for their first job; we
					empower them to become tomorrow's leaders.
				</p>
				<p>
					Our journey has been marked by continuous innovation, strategic partnerships with industry
					giants, and a commitment to staying ahead of the curve in a fast-paced world. We've
					developed cutting-edge programs and exclusive symposiums that connect students with top
					industry experts, providing them with the tools they need to excel in their careers.
				</p>
				<p>
					As we continue to grow and evolve, our mission remains steadfast: to equip young minds
					with the latest skills and deep industry insights, ensuring they're not just ready for the
					job market but primed to lead in it.
				</p>
			</div>
		</div>
	</div>
</section>
