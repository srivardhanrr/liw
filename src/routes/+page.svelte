<script lang="ts">
	import Faqs from '$lib/components/sections/Faqs.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import KeyBenefits from '$lib/components/sections/KeyBenefits.svelte';
	import OurApproach from '$lib/components/sections/OurApproach.svelte';
	import OurGoals from '$lib/components/sections/OurGoals.svelte';
	import WhoWeAre from '$lib/components/sections/WhoWeAre.svelte';
	import WhatWeProvide from '$lib/components/sections/WhatWeProvide.svelte';
	import CourseFinderForm from '$lib/components/sections/CourseFinderForm.svelte';
	import AudienceSelection from '$lib/components/sections/AudienceSelection.svelte';
	import GoalsAndMission from '$lib/components/sections/GoalsAndMission.svelte';
	import RecentPosts from '$lib/components/sections/blogs/RecentPosts.svelte';
	import CaseStudies from '$lib/components/sections/CaseStudies.svelte';
	import Partnership from '$lib/components/sections/Partnership.svelte';
	import Testimonials from '$lib/components/sections/Testimonials.svelte';
	import Calendly from '$lib/components/sections/Calendly.svelte';

	export let form;

	export let data;

	const faqs = [
		{
			question: 'Who can benefit from your programs?',
			answer:
				'Our programs are tailored for a wide range of individuals, including students, startup owners, teachers, corporate employees at all levels, and educators.'
		},
		{
			question: 'What makes your courses different from others?',
			answer:
				"Our courses are unique because they go beyond traditional learning. We emphasize experiential training, combining theoretical knowledge with practical applications. This approach ensures that you don't just earn a certificate—you gain real-world skills."
		},
		{
			question: 'How do I enroll in a course?',
			answer:
				'To enroll in a course, please get in touch with us via email at your-email@domain.com. Our team will guide you through the enrollment process and answer any questions you may have.'
		},
		{
			question: 'Do you offer both online and offline training?',
			answer:
				'Yes, we offer both online and offline training sessions to accommodate different learning preferences. Our online courses provide flexibility, while our offline workshops offer hands-on, interactive experiences.'
		},
		{
			question: 'What is the MLE℠ title, and how do I earn it?',
			answer:
				'MLE℠ stands for Member of Leaders Excellence, a recognized title that signifies your commitment to excellence in leadership. You earn this title by completing our certification programs and becoming part of our exclusive community, which is supported by academics from renowned institutions like Harvard and Stanford.'
		},
		{
			question: 'How do your symposiums work?',
			answer:
				'Our symposiums are designed to connect students and professionals with industry leaders through interactive sessions. These events provide valuable insights, real-world advice, and opportunities to engage directly with experts in your field.'
		},
		{
			question: 'What is AACSB - Association to Advance Collegiate Schools of Business?',
			answer:
				'AACSB International is the gold standard of business education accreditation, awarded to only the top 5% of business schools worldwide. This prestigious accreditation ensures that the programs meet the highest standards in quality, credibility, and global recognition. Being part of an AACSB-accredited network gives you a competitive edge, enhanced career opportunities, and access to an elite professional community.'
		}
	];
</script>


<svelte:head>
	<title>Leadership Innovation World | Symposium</title>
	<meta
		name="description"
		content="Discover the Leadership Innovation World with our mission to reshape education."
	/>
</svelte:head>

<Hero />
<WhoWeAre />
<WhatWeProvide />
<div class="mt-16 text-center">
	<h3 class="mb-4 font-bricolage text-2xl text-brand-burgundy">
		Is your career stuck while your peers advance by mastering corporate behavior?
	</h3>
	<p class="text-lg text-gray-700">
		How long can you afford to be left behind in the corporate race?
	</p>
</div>
<CourseFinderForm {form} />
<!-- <Calendly /> -->

<OurApproach />
<Partnership />
<div class="md:container">
<div class="m-4 grid grid-cols-1 gap-8 md:grid-cols-2">
	<div class="rounded-lg bg-brand-burgundy p-6 text-white">
		<h3 class="mb-4 font-playfair text-xl">For Startups</h3>
		<p class="mb-4 font-bricolage">
			How much longer can you afford to run at less than full efficiency while others are optimizing
			their processes?
		</p>
		<a href="/courses/startup" class="text-brand-gold transition duration-300 hover:text-white"
			>Optimize Now →</a
		>
	</div>
	<div class="text-brand-dark rounded-lg bg-brand-gold p-6">
		<h3 class="mb-4 font-playfair text-xl">For Students</h3>
		<p class="mb-4 font-bricolage">
			Is your career stuck while your peers advance by mastering corporate behavior? How long can
			you afford to be left behind in the corporate race?
		</p>
		<a href="/courses/student" class="text-brand-burgundy transition duration-300 hover:text-white"
			>Advance Your Career →</a
		>
	</div>
</div>
</div>

<AudienceSelection />
<GoalsAndMission />
<Testimonials testimonials={data.testimonials} />
<KeyBenefits />

<OurGoals />

<RecentPosts posts={data.blogPosts}/>
<CaseStudies caseStudies={data.caseStudies}/>
<Faqs {faqs} />
