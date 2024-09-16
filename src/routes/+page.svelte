<script lang="ts">
	import Faqs from '$lib/components/sections/Faqs.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import KeyBenefits from '$lib/components/sections/KeyBenefits.svelte';
	import OurApproach from '$lib/components/sections/OurApproach.svelte';
	import OurGoals from '$lib/components/sections/OurGoals.svelte';
	import WhoWeAre from '$lib/components/sections/WhoWeAre.svelte';
	import { Button } from '$lib/components/ui/button';
	import WhatWeProvide from '$lib/components/sections/WhatWeProvide.svelte';
	import CourseFinderForm from '$lib/components/sections/CourseFinderForm.svelte';
  import AudienceSelection from '$lib/components/sections/AudienceSelection.svelte';
  import GoalsAndMission from '$lib/components/sections/GoalsAndMission.svelte';
	import RecentPosts from '$lib/components/sections/blogs/RecentPosts.svelte';

    const faqs = [
		{
			question: 'Who can attend the symposium?',
			answer:
				'The symposium welcomes students, educators, academic institutions, and professionals keen on exploring key trends like IoT, drone technology, and cybersecurity. Industry experts will participate as speakers and mentors, offering valuable insights.'
		},
		{
			question: 'What are the key themes of the symposium?',
			answer:
				'This year, the focus is on breakthrough technologies including IoT, drone innovation, and cybersecurity. The event will feature panel discussions, keynote speeches, and workshops, addressing the future of these fields and their global impact.'
		},
		{
			question: 'What value does the symposium offer to industry speakers?',
			answer:
				'Industry speakers gain the opportunity to share their expertise with future leaders, enhance their brand visibility, and grow their professional network. Participation also facilitates dialogues that shape the future of their industries.'
		},
		{
			question: 'What types of sessions are available during the symposium?',
			answer:
				'Sessions include dynamic panel discussions, visionary keynotes, hands-on workshops, and networking events. Each is tailored to provide attendees with actionable knowledge and career-enhancing skills.'
		},
		{
			question: 'How can I become a speaker or panelist at the symposium?',
			answer:
				'If you\'re an industry expert interested in speaking, visit our speaker application page or contact us at info@leadershipinnovationworld.com to explore opportunities.'
		},
		{
			question: 'What networking opportunities are available during the symposium?',
			answer:
				"The symposium provides exclusive networking sessions for students and professionals to connect with industry leaders, offering mentorship, career guidance, and collaboration prospects."
		}
	];
</script>

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
<CourseFinderForm />
<OurApproach />
<div class="m-4 grid grid-cols-1 gap-8 md:m-8 md:grid-cols-2">
	<div class="rounded-lg bg-brand-burgundy p-6 text-white">
		<h3 class="mb-4 font-playfair text-xl">For Startups</h3>
		<p class="mb-4 font-bricolage">
			How much longer can you afford to run at less than full efficiency while others are optimizing
			their processes?
		</p>
		<a href="/courses/startup" class="text-brand-gold transition duration-300 hover:text-white">Optimize Now →</a>
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

<AudienceSelection />
<GoalsAndMission />
<KeyBenefits />


<!-- <div class="bg-brand-gold/20 py-8 text-center">
	<h3 class="mb-2 font-playfair text-2xl text-brand-burgundy">
		Are you losing out on key opportunities?
	</h3>
	<p class="mb-4 text-lg text-gray-700">
		While others network and influence, are you fading into the background?
	</p>
	<Button
		variant="outline"
		class="border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-white"
	>
		Boost Your Social Intelligence Now
	</Button>
</div> -->
<!-- <div class="hidden lg:block fixed bottom-4 right-4 bg-white p-6 rounded-lg shadow-xl max-w-sm">
    <h3 class="font-bricolage text-xl text-brand-burgundy mb-2">
      Why are others leading themselves to success while you wait for direction?
    </h3>
    <p class="text-gray-700 mb-4">
      If you don't develop self-leadership now, how much longer will you be stuck in the shadows?
    </p>
    <Button variant="outline" class="w-full border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-white">
      Start Your Leadership Journey
    </Button>
  </div> -->

<OurGoals />

<RecentPosts />

<Faqs {faqs} />

