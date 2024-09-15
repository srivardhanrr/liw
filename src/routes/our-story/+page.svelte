<!-- src/routes/our-story/+page.svelte -->
<script>
	import AboutFounders from '$lib/components/sections/about-us/AboutFounders.svelte';
	import OurJouney from '$lib/components/sections/about-us/OurJouney.svelte';
	import OurStoryHero from '$lib/components/sections/about-us/OurStoryHero.svelte';
	import OurTeam from '$lib/components/sections/about-us/OurTeam.svelte';

	const founders_details = [
    {
        name: 'Jeevitha P. Raju',
        title: 'Founder of Leadership Innovation World',
        image: '/images/jeevithaNew.jpg',
        background: 'Jeevitha P. Raju is an experienced educator and communication coach. With over a decade of experience, she has empowered over half a million individuals across India, focusing on honing soft skills and preparing students for success in the global environment.',
        achievements: [
            'Educated in communication at prestigious institutions like Leaders Excellence and Harvard Square.',
            'Promoted higher education opportunities in Malaysia.',
            'Contributed to educational policies in Bengaluru South.',
            'Worked in corporate training and educational leadership.'
        ],
        instagram: 'https://www.instagram.com/jeeviiii',
        linkedin: 'https://www.linkedin.com/in/jeevitha-p-raju-79857610b',
    },
    {
        name: 'Rohit Rammurthy',
        title: 'Head of Strategy and Business Development at Arvind Industries',
        image: '/images/rohit.png',
        background: 'Rohit Rammurthy has a solid academic foundation and extensive business experience. He has taught at prestigious institutions and has developed expertise in marketing, strategic management, and entrepreneurship.',
        achievements: [
            'Master\'s from Indiana University of Pennsylvania.',
            'Scholarship to a Harvard educator course in 2017.',
            'Delivered impactful sessions at Harvard University and IIM Bangalore.',
            'Recognized as Young Professor of the Year 2021 and Young Education Leader of the Year 2023.'
        ],
        instagram: 'https://www.instagram.com/rohitrammurthy',
        linkedin: 'https://www.linkedin.com/in/rohit-rammurthy/',
    }
];
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

<h2 class="text-4xl md:text-6xl font-playfair text-center md-8 md:mb-16 text-brand-burgundy">Our Visionary Founders</h2>

{#each founders_details as founder}
<section class="py-12 bg-white">
	<div class="container mx-auto px-4 max-w-4xl">

	  <div class="flex flex-col md:flex-row gap-12 items-start">
		<div class="md:w-1/3">
		  <img src={founder.image} alt={founder.name} class="w-full rounded-lg shadow-lg">
		</div>
		<div class="md:w-2/3">
		  <h1 class="text-4xl md:text-5xl font-playfair text-brand-burgundy mb-4">{founder.name}</h1>
		  <p class="text-xl font-bricolage text-brand-gold mb-6">{founder.title}</p>
		  <div class="prose prose-lg max-w-none">
			<p class="mb-6">{founder.background}</p>
			<h2 class="text-2xl font-playfair text-brand-burgundy mt-8 mb-4">Key Achievements</h2>
			<ul class="list-disc pl-6">
			  {#each founder.achievements as achievement}
				<li class="mb-2">{achievement}</li>
			  {/each}
			</ul>
		  </div>
		</div>
	  </div>
	  <div class="mt-12 border-t border-gray-200 pt-8">
		<h2 class="mb-4 font-playfair text-2xl text-brand-burgundy">
		  Connect with {founder.name.split(' ')[0]}
		</h2>
		<div class="flex space-x-4">
		  <!-- <a href="{founder.instagram}" class="text-brand-burgundy transition duration-300 hover:text-brand-gold">
			<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			  <path
				d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
			  />
			</svg>
		  </a> -->
		  <a href="{founder.instagram}" class="text-brand-burgundy transition duration-300 hover:text-brand-gold">
			<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			  <path
				d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
			  />
			</svg>
		  </a>
		  <a href="{founder.linkedin}" class="text-brand-burgundy transition duration-300 hover:text-brand-gold">
			<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			  <path
				d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
			  />
			</svg>
		  </a>
		</div>
	  </div>
	</div>
  </section>
{/each}
  

<div class="mx-16 my-16 border-l-4 border-brand-gold pl-6">
	<h3 class="mb-4 font-playfair text-2xl text-brand-burgundy">
		Unlock Your Startup's Hidden Potential
	</h3>
	<p class="mb-6 font-bricolage text-lg text-gray-700">
		What if you could reduce your startup's waste by 30% next quarter—would you let that opportunity
		pass by?
	</p>
	<a
		href="/courses/startup"
		class="font-bricolage uppercase tracking-wider text-brand-gold transition duration-300 hover:text-brand-burgundy"
	>
		Learn More →
	</a>
</div>
<!-- <AboutFounders /> -->
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
